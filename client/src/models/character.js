var Backbone = require('backbone');

module.exports = CharacterModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/characters'
});
