const express = require('express');
const hbs = require('hbs');
const app = express();
const port = 9090;

app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(port, function() {
    console.log('App listening at port ' + port);
});