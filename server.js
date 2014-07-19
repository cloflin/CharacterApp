var config = require('./config.json'),
    express = require('express'),
    http = require('http'),
    path = require('path'),
    routes = require('./app/routes'),
    exphbs = require('express3-handlebars'),
    mongoose = require('mongoose'),
    seeder = require('./app/seeder'),
    app = express(),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler');

console.log(config);

app.set('port', process.env.PORT || config.nodePort );
app.set('views', __dirname + '/views');
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: app.get('views') + '/layouts'
}));
app.set('view engine', 'handlebars');

app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser(config.cookieSecret));

routes.initialize(app, new express.Router());

app.use('/', express.static(path.join(__dirname, 'public')));

if ('development' === app.get('env')) {
    app.use(errorHandler());
}

//connect to the db server:
mongoose.connect('mongodb://localhost/CharacterApp');
mongoose.connection.on('open', function() {
    console.log('Connected to Mongoose.');

    // check if the db is empty, if so seed it with some contacts:
    seeder.check();
});

//finally boot up the server:
http.createServer(app).listen(app.get('port'), function() {
    console.log('Server up: http://localhost:' + app.get('port'));
});
