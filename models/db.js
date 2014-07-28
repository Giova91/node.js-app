var pg = require('pg')
  , conString = 'postgres://postgres:admin@localhost:5432/mydb'
  , client = new pg.Client(conString)
  , tags = []
  , events = []
  , images = [];

client.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    } 
});

insert = function (nome_tag) {
    var insert_tag = client.query('INSERT INTO tag(nome_tag) VALUES($1)', [nome_tag]);
};

tag_list = function (fn) {
    var tag = client.query('SELECT * FROM tag ORDER BY id_tag ASC');

    tag.on('row', function (row) {
        tags.push(row);
    });

    tag.on('end', function () {
        fn(tags);
        tags = [];
    });
};

event_list = function (fn) {
    var event = client.query('SELECT id_evento, nome_evento, luogo_evento FROM evento ORDER BY id_evento ASC');

    event.on('row', function (row) {
        events.push(row);
    });

    event.on('end', function () {
        fn(events);
        events = [];
    });
};

img_list = function (fn) {
    var img = client.query('SELECT id_foto, nome_foto, data_scatto FROM foto ORDER BY id_foto ASC');

    img.on('row', function (row) {
        images.push(row);
    });

    img.on('end', function () {
        fn(images);
        images = [];
    });
};

exports.insert = insert;
exports.tag_list = tag_list;
exports.event_list = event_list;
exports.img_list = img_list;