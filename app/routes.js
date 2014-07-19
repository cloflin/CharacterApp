var home = require('../controllers/home'),
    characters = require('../controllers/characters');

module.exports.initialize = function(app, router) {
    router.get('/', home.index);
    router.get('/api/characters', characters.index);
    router.get('/api/characters/:id', characters.getById);
    router.post('/api/characters', characters.add);
    router.delete('/api/characters/:id', characters.delete);

    app.use('/', router);
};
