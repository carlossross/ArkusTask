const service = require('../Services/LionDesk.service');

exports.GetAll = (req, res) => {
    try {
        const data = service.GetAll();
        return res.status(200).json({ data: data });
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

exports.Search = (req, res) => {
    try {
        const name = req.params.name;
        const result = service.Search(name);

        const count = result.length;
        const data = result;

        return res.status(200).json({ count: count, data: data });
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
}

exports.AddUser = (req, res) => {
    try {
        const newData = { ...req.body }
        service.AddUser(newData);
        return res.status(200).json({ message: 'New data added' });
    }
    catch (e) {
        return res.status(400).json({ message: e.message });
    }
}