const fs = require('fs');
const g = require('../Utilities/GenerateId');
const data = require('../Data/data.json');

exports.GetAll = () => {
    return data;
}

exports.Search = (toSearch) => {
    try {
        toSearch = toSearch.toLowerCase();
        let results = [];
        for (var i = 0; i < data.length; i++) {
            for (key in data[i]) {
                if (data[i][key].toString().toLowerCase().indexOf(toSearch) != -1) {
                    results.push(data[i]);
                    break;
                }
            }
        }
        return results;
    }
    catch (e) {
        throw Error('Error while searching in data');
    }
}

exports.AddUser = (newData) => {
    try {
        newData._id = g.generate();
        newData.index = data.length;
        let dataJson = fs.readFileSync('src/Data/data.json');
        let json = JSON.parse(dataJson);
        json.push(newData);
        fs.writeFileSync('src/Data/data.json', JSON.stringify(json));
    }
    catch (e) {
        throw Error('Error while adding new data');
    }
}