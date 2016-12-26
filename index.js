/**
 * Created by muhammed on 25/12/16.
 */
var express = require('express');
var exphbr = require('express-handlebars');
var routes = require('./routes/route');
var app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbr({defaultLayout:'main'}));
// app.use(express.static(__dirname + '/public'));

app.get('/', routes.home);
app.get('/:city', routes.city);

var port = process.env.PORT || 8080;
app.listen(port, function (req, res) {
    console.log('Server started at ', port);
});
