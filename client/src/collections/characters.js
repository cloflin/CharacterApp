var Backbone = require('backbone'),
    CharacterModel = require('../models/character');

module.exports = CharactersCollection = Backbone.Collection.extend({
    model:  CharacterModel,
    url: '/api/characters'
});
