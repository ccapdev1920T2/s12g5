const express = require('express');


const controller = require('../controllers/signinController.js');
const browseController = require('../controllers/browseController.js')
const createListingController = require('../controllers/createListingController.js')
const signUpController = require('../controllers/signupController.js');
const editprofileController = require('../controllers/editProfileController.js');
const editListingController = require('../controllers/editListingController.js');
const listingController = require('../controllers/listingController.js');
const logoutController = require('../controllers/logoutController.js');
const profileController = require('../controllers/profileController.js');
const messagesController = require('../controllers/messagesController.js');
const myListingController = require('../controllers/myListingController.js');
const signupSuccessController = require('../controllers/signupSuccessController.js')
const app = express();

module.exports = app;

app.get('/', controller.getSignIn);

app.post('/', controller.postSignIn);

app.get('/browse', browseController.getBrowse);

app.get('/createlisting', createListingController.getCreateListing);

app.post('/createlisting', createListingController.postCreateListing);

app.get('/signup', signUpController.getSignUp);

app.post('/signup', signUpController.postSignUp);

app.get('/editlisting', editListingController.getEditListing);

app.post('/editlisting', editListingController.postEditListing);

app.get('/listing', listingController.getListing);

app.get('/profile', profileController.getProfile);

app.get('/messages', messagesController.getMessages);

app.get('/logout', logoutController.getLogout);

app.get('/editprofile', editprofileController.getEditProfile);

app.post('/editprofile', editprofileController.postEditProfile);

app.get('/mylistings', myListingController.getMyListing);

app.get('/signupsuccess', signupSuccessController.getSuccess);



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
