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

app.get('/logout', function(req, res) {
    res.render('userlogin', {});
});



app.get('/browse', function(req, res) {
    res.render('browselisting', {
        products: [{photo: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/p960x960/80349670_2593704224046877_8463542934363439104_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=AnbM8v7dPPcAX-8Oz4F&_nc_ht=scontent.fmnl9-1.fna&_nc_tp=6&oh=a68621843e23e0e374e5f2d2c2232f60&oe=5E954668", name:"kitty kat", statprice: 69, endprice:450},
        {photo: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/p960x960/80349670_2593704224046877_8463542934363439104_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=AnbM8v7dPPcAX-8Oz4F&_nc_ht=scontent.fmnl9-1.fna&_nc_tp=6&oh=a68621843e23e0e374e5f2d2c2232f60&oe=5E954668", name:"kitty kat", statprice: 69, endprice:450},
        {photo: "https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.0-9/p960x960/80349670_2593704224046877_8463542934363439104_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=AnbM8v7dPPcAX-8Oz4F&_nc_ht=scontent.fmnl9-1.fna&_nc_tp=6&oh=a68621843e23e0e374e5f2d2c2232f60&oe=5E954668", name:"kitty kat", statprice: 69, endprice:450}]
    });
});

app.get('/createlisting', function(req, res) {
    res.render('createlisting', {});
});

app.get('/editlisting', function(req, res) {
    res.render('editlisting', {});
});
app.get('/editprofile', function(req, res) {
    var name = "Bryce";
    var username = "baba";
    var rating = 8;
    var idnum = 118;
    var college = "CCS";
    var userdesc = "bryce anthgonyr ramirez lorem ipsum user description blahg blah";
    res.render('editprofile', {name: name, username: username, rating: rating, idnum: idnum, college: college, userdesc: userdesc});
});
app.get('/listing', function(req, res) {
    var productname = "kitty kat";
    var producttype = "pet";
    var username = "katthecat";
    var photos = [{img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg"}, 
                {img: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg"}];

    res.render('listing', {productname: productname, producttype: producttype, username: username,photo: photos});
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