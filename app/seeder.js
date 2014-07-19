var mongoose = require('mongoose'),
    models = require('./models'),
    md5 = require('MD5');

module.exports = {
    check: function() {
        models.Character.find({}, function(err, characters) {
            if (characters.length === 0) {
                console.log('no characters found, seeding...');
                var newCharacter = new models.Character({
                    characterName: "Diesum Moire",
                    playerName: {
                        first:  "Charles",
                        last:   "Loflin"
                    },
                    class:      "Rogue",
                    level:   "1",
                    ecl: "1",
                    race: "Tiefling",
                    template: "",
                    size: "Medium",
                    gender: "Male",
                    alignment: "NE",
                    patronDeity: "Tymorra",
                    weight: "170 lbs.",
                    description: "5'8\", yellow-blonde hair, pale skin, amber eyes. 18 years old.",
                    abilityScores: {
                        strength: 13,
                        dexterity: 17,
                        constitution: 14,
                        intelligence: 14,
                        wisdom: 10,
                        charisma: 6
                    },
                    hitPoints: 8
                });
                newCharacter.save(function(err, character) {
                    console.log('successfully inserted character: ' + character._id);
                });

            } else {
                console.log('found ' + characters.length + ' existing characters!');
            }
        });
    }
};
