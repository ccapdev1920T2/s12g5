const express = require('express');
const controller = require('../controller/siginController.js');
const browseController = require('../controller/browseController.js')
const createListingController = require('../controller/createListingController.js')
const app = express();


module.exports = app;



app.get('/', controller.getSignIn);

app.post('/', controller.postSignIn);

app.get('/browse', browseController.getBrowse);

app.get('/createlisting', createListingController.getCreateListing);

app.post('/createlisting', createListingController.postCreateListing);

app.get('/logout', function(req, res) {
    res.render('userlogin', {});
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
   
    var productdesc = "its a cat. thats it.";
    var lowrange = 50;
    var highrange = 500;
    var highestbid = 200;
    var highestbidderun = "trisha";

    res.render('listing', {productname: productname, producttype: producttype, username: username,photo: photos, 
                            productdesc: productdesc, lowrange: lowrange, highrange: highrange, highestbid: highestbid, highestbidderun: highestbidderun});
});
app.get('/messages', function(req, res) {
    res.render('messages', {});
});
app.get('/mylistings', function(req, res) {
    var olisting = [{olimg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*", olname: "dog cat", oldescription: "dog cat binaliktad kinurot pa", olusername: "jedtan", olprice: 100}, 
                    {olimg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*", olname: "dog cat", oldescription: "dog cat binaliktad kinurot pa", olusername: "jedtan", olprice: 100},
                    {olimg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*", olname: "dog cat", oldescription: "dog cat binaliktad kinurot pa", olusername: "jedtan", olprice: 100},
                    {olimg: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/single-minded-royalty-free-image-997141470-1558379890.jpg?crop=0.671xw:1.00xh;0.0847xw,0&resize=640:*", olname: "dog cat", oldescription: "dog cat binaliktad kinurot pa", olusername: "jedtan", olprice: 100}];
    var clisting = [{climg: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2016/11/GettyImages-173569324-650x450.jpg", clname: "cat dog", cldescription: "whatever this is", winner: "winnerchickendinner", clprice: 200, clusername: "dogggg"},
                    {climg: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2016/11/GettyImages-173569324-650x450.jpg", clname: "cat dog", cldescription: "whatever this is", winner: "winnerchickendinner", clprice: 200, clusername: "dogggg"},
                    {climg: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2016/11/GettyImages-173569324-650x450.jpg", clname: "cat dog", cldescription: "whatever this is", winner: "winnerchickendinner", clprice: 200, clusername: "dogggg"},
                    {climg: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2016/11/GettyImages-173569324-650x450.jpg", clname: "cat dog", cldescription: "whatever this is", winner: "winnerchickendinner", clprice: 200, clusername: "dogggg"},
                    {climg: "https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2016/11/GettyImages-173569324-650x450.jpg", clname: "cat dog", cldescription: "whatever this is", winner: "winnerchickendinner", clprice: 200, clusername: "dogggg"}];
    var ulisting = [{ulimg: "https://cdn.vox-cdn.com/thumbor/Vvlyzrlf5dip-bFgfSa9vi7rzdk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66113368/EOaIPk4U4AANzxs.5.jpg", ulname: "byleth", uldescription: "best character", ulpricelow: 20, ulpricehigh: 50, },
                    {ulimg: "https://cdn.vox-cdn.com/thumbor/Vvlyzrlf5dip-bFgfSa9vi7rzdk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66113368/EOaIPk4U4AANzxs.5.jpg", ulname: "byleth", uldescription: "best character", ulpricelow: 20, ulpricehigh: 50, },
                    {ulimg: "https://cdn.vox-cdn.com/thumbor/Vvlyzrlf5dip-bFgfSa9vi7rzdk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66113368/EOaIPk4U4AANzxs.5.jpg", ulname: "byleth", uldescription: "best character", ulpricelow: 20, ulpricehigh: 50, },
                    {ulimg: "https://cdn.vox-cdn.com/thumbor/Vvlyzrlf5dip-bFgfSa9vi7rzdk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66113368/EOaIPk4U4AANzxs.5.jpg", ulname: "byleth", uldescription: "best character", ulpricelow: 20, ulpricehigh: 50, },
                    {ulimg: "https://cdn.vox-cdn.com/thumbor/Vvlyzrlf5dip-bFgfSa9vi7rzdk=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/66113368/EOaIPk4U4AANzxs.5.jpg", ulname: "byleth", uldescription: "best character", ulpricelow: 20, ulpricehigh: 50, }];


    res.render('mylistings', {olisting: olisting, clisting: clisting, ulisting: ulisting});
});

app.get('/listingparticipation', function(req, res){
     var plisting = [{plimg: "https://vignette.wikia.nocookie.net/p__/images/d/dc/Lucina_SSBU.png/revision/latest?cb=20180613135651&path-prefix=protagonist", plname: "lucina", pldescription: "second best character", plusername: "mamamo", plprice: 350},
                    {plimg: "https://vignette.wikia.nocookie.net/p__/images/d/dc/Lucina_SSBU.png/revision/latest?cb=20180613135651&path-prefix=protagonist", plname: "lucina", pldescription: "second best character", plusername: "mamamo", plprice: 350},
                    {plimg: "https://vignette.wikia.nocookie.net/p__/images/d/dc/Lucina_SSBU.png/revision/latest?cb=20180613135651&path-prefix=protagonist", plname: "lucina", pldescription: "second best character", plusername: "mamamo", plprice: 350},
                    {plimg: "https://vignette.wikia.nocookie.net/p__/images/d/dc/Lucina_SSBU.png/revision/latest?cb=20180613135651&path-prefix=protagonist", plname: "lucina", pldescription: "second best character", plusername: "mamamo", plprice: 350},
                    {plimg: "https://vignette.wikia.nocookie.net/p__/images/d/dc/Lucina_SSBU.png/revision/latest?cb=20180613135651&path-prefix=protagonist", plname: "lucina", pldescription: "second best character", plusername: "mamamo", plprice: 350}];
    res.render('listingparticipation', {listing: plisting});
});

app.get('/pinnedlistings', function(req, res){
    var nlisting = [{nlimg:"https://serenesforest.net/wiki/images/thumb/d/d1/Male_Corrin_%28FEW%29.png/379px-Male_Corrin_%28FEW%29.png", nlname: "corrin", nldescription: "third best character", nlusername: "hehehe", nlprice: 250},
                    {nlimg:"https://serenesforest.net/wiki/images/thumb/d/d1/Male_Corrin_%28FEW%29.png/379px-Male_Corrin_%28FEW%29.png", nlname: "corrin", nldescription: "third best character", nlusername: "hehehe", nlprice: 250},
                    {nlimg:"https://serenesforest.net/wiki/images/thumb/d/d1/Male_Corrin_%28FEW%29.png/379px-Male_Corrin_%28FEW%29.png", nlname: "corrin", nldescription: "third best character", nlusername: "hehehe", nlprice: 250},
                    {nlimg:"https://serenesforest.net/wiki/images/thumb/d/d1/Male_Corrin_%28FEW%29.png/379px-Male_Corrin_%28FEW%29.png", nlname: "corrin", nldescription: "third best character", nlusername: "hehehe", nlprice: 250},
                    {nlimg:"https://serenesforest.net/wiki/images/thumb/d/d1/Male_Corrin_%28FEW%29.png/379px-Male_Corrin_%28FEW%29.png", nlname: "corrin", nldescription: "third best character", nlusername: "hehehe", nlprice: 250}];
    res.render('pinnedlistings', {listing: nlisting});
});

app.get('/editlisting', function(req, res){
    res.render('editlisting', {listing: nlisting});
});


app.get('/profile', function(req, res) {
    res.render('profile', {});
});

app.get('/signup', function(req, res) {
    res.render('signup', {});
});