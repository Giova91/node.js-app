module.exports = function (app) {

    var db = require('../models/db');

    //Home Page
    app.get('/', function (req, res) {
        res.render('index', { title: 'Home Page' });
    });

    //Tag
    app.get('/tag', function (req, res) {
        db.tag_list(function (tags) {
            res.render('tag', { title: 'Tags', rows: tags });
        });
    });

    //Eventi
    app.get('/eventi', function (req, res) {
        db.event_list(function (events) {
            res.render('eventi', { title: 'Eventi', rows: events });
        });
    });

    //Immagini
    app.get('/immagini', function (req, res) {
        db.img_list(function (images) {
            res.render('immagini', { title: 'Immagini', rows: images });
        });
    });

}