var models = require('../app/models'),
    md5 = require('MD5');

module.exports = {
    index: function(req, res) {
        models.Character.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Character.find({ _id: req.params.id }, function(err, character) {
            if (err) {
                res.json({error: 'Character not found.'});
            } else {
                res.json(character);
            }
        });
    },
    add: function(req, res) {
        var newCharacter = new models.Character(req.body);
        newCharacter.save(function(err, character) {
            if (err) {
                res.json({error: 'Error adding character.'});
            } else {
                res.json(character);
            }
        });
    },
    // update: function(req, res) {
    //     console.log(req.body);
    //     models.Character.update({ _id: req.body.id }, req.body, function(err, updated) {
    //         if (err) {
    //             res.json({error: 'Character not found.'});
    //         } else {
    //             res.json(updated);
    //         }
    //     })
    // },
    delete: function(req, res) {
        models.Character.findOne({ _id: req.params.id }, function(err, character) {
            if (err) {
                res.json({error: 'Character not found.'});
            } else {
                character.remove(function(err, character){
                    res.json(200, {status: 'Success'});
                })
            }
        });
    }
};
