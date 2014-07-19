var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
    template: require('../../templates/add.hbs'),
    events: {
        'click a.save-button': 'save'
    },

    save: function(e) {
        e.preventDefault();
        var newCharacter = {
            characterName: this.$el.find('#characterName'),
            playerName: {
                first: this.$el.find('#playerName_first').val(),
                last: this.$el.find('#playerName_last').val()
            },
            class: this.$el.find('#class').val(),
            level: this.$el.find('#level').val(),
            ecl: this.$el.find('#ecl').val(),
            race: this.$el.find('#race').val(),
            template: this.$el.find('#template').val(),
            size: this.$el.find('#size').val(),
            gender: this.$el.find('#gender').val(),
            alignment: this.$el.find('#alignment').val(),
            patronDeity: this.$el.find('#patronDeity').val(),
            weight: this.$el.find('#weight').val(),
            description: this.$el.find('#description').val(),
            abilityScores: {
                strength: this.$el.find('#strength').val(),
                dexterity: this.$el.find('#dexterity').val(),
                constitution: this.$el.find('#constitution').val(),
                intelligence: this.$el.find('#intelligence').val(),
                wisdom: this.$el.find('#wisdom').val(),
                charisma: this.$el.find('#charisma').val()
            },
            hitPoints: this.$el.find('#hitPoints').val(),
        };

        window.App.data.characters.create(newCharacter);
        window.App.core.vent.trigger('app:log', 'Add View: Saved new character!');
        window.App.controller.home();
    }
});
