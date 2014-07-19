var Marionette = require('backbone.marionette'),
    CharactersView = require('./views/characters'),
    CharacterDetailsView = require('./views/character_details'),
    AddCharacterView = require('./views/add');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
        window.App.views.charactersView = new CharactersView({ collection: window.App.data.characters });
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        var view = window.App.views.charactersView;
        this.renderView(view);
        window.App.router.navigate('#');
    },

    details: function(id) {
        App.core.vent.trigger('app:log', 'Controller: "Character Details" route hit.');
        var view = new CharacterDetailsView({ model: window.App.data.characters.get(id)});
        this.renderView(view);
        window.App.router.navigate('details/' + id);
    },

    add: function() {
        App.core.vent.trigger('app:log', 'Controller: "Add Character" route hit.');
        var view = new AddCharacterView();
        this.renderView(view);
        window.App.router.navigate('add');
    },

    renderView: function(view) {
        this.destroyCurrentView(view);
        App.core.vent.trigger('app:log', 'Controller: Rendering new view.');
        $('#js-boilerplate-app').html(view.render().el);
    },

    destroyCurrentView: function(view) {
        if (!_.isUndefined(window.App.views.currentView)) {
            App.core.vent.trigger('app:log', 'Controller: Destroying existing view.');
            window.App.views.currentView.close();
        }
        window.App.views.currentView = view;
    }
});
