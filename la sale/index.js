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



app.get('/browse', function(req, res) {
    res.render('browselisting', {});
});

app.get('/createlisting', function(req, res) {
    res.render('createlisting', {});
});

app.get('/editlisting', function(req, res) {
    res.render('editlisting', {});
});
app.get('/editprofile', function(req, res) {
    res.render('editprofile', {});
});
app.get('/listing', function(req, res) {
    res.render('listing', {});
});
app.get('/messages', function(req, res) {
    res.render('messages', {});
});
app.get('/mylistings', function(req, res) {
    res.render('mylistings', {});
});
app.get('/profile', function(req, res) {
    res.render('profile', {});
});





app.listen(port, function() {
    console.log('App listening at port ' + port);
});