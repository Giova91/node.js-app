module.exports = function (app) {

    var db = require('../models/db');

    app.post('/tag', function (req, res) {
        var nome_tag = req.body.nome_tag;
        db.insert(nome_tag);
        res.redirect('/tag');
    })
}