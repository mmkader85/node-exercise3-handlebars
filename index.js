/**
 * Created by muhammed on 25/12/16.
 */

var express = require('express');
var exphbr = require('express-handlebars');
var routes = require('./routes/route');
var conditionalHelpers = require('./helpers/conditional');

var app = express();
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

var config = {
    defaultLayout: 'main',
    helpers: conditionalHelpers
};
app.engine('handlebars', exphbr(config));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;
var server = app.listen(port, function (req, res) {
    console.log('Server started at ', port);
});