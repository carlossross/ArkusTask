exports.generate = () => {
    const _sym = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let str = '';

    for (var i = 0; i < 24; i++) {
        str += _sym[parseInt(Math.random() * (_sym.length))];
    }

    //find id; exists ? generate() : return str

    return str;
}