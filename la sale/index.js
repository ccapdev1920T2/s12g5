const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 9090;

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));
hbs.registerPartials(__dirname + '/views/partials');



app.get('/', function(req, res) {
    res.render('userlogin', {});
});

app.listen(port, function() {
    console.log('App listening at port ' + port);
});