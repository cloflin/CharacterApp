var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Character = new Schema({
    characterName:      { type: String },
    playerName: {
        first:  { type: String },
        last:   { type: String }
    },
    class:      { type: String },
    level:   { type: String },
    ecl: { type: String },
    race: { type: String },
    template: { type: String },
    size: { type: String },
    gender: { type: String },
    alignment: { type: String },
    patronDeity: { type: String },
    weight: { type: String },
    description: { type: String },
    abilityScores: {
        strength: { type: Number },
        dexterity: { type: Number },
        constitution: { type: Number },
        intelligence: { type: Number },
        wisdom: { type: Number },
        charisma: { type: Number }
    },
    hitPoints: { type: Number }
});

module.exports = {
    Character: mongoose.model('Character', Character)
};
