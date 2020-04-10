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
const signupSuccessController = require('../controllers/signupSuccessController.js');
const pinnedListingController = require('../controllers/pinListingController.js');
const listingpController = require('../controllers/listingpController');
const editProfileSuccessController = require('../controllers/editprofileSuccessController');
const ratingSuccessController = require('../controllers/ratingSuccessController');
const aboutController = require('../controllers/aboutController')
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

app.get('/pinnedlistings', pinnedListingController.getPinListing);

app.get('/listingparticipation', listingpController.getListing);

app.get('/editprofileSuccess', editProfileSuccessController.getSuccess);

app.post('/deletelisting', editListingController.deleteListing);

app.get('/deletepin', pinnedListingController.deletePin);

app.get('/searchnav', browseController.searchNav);

app.get('/buyOut', listingController.buyOut);

app.get('/endBidding', listingController.endBidding);

app.get('/getEndDate', listingController.getEndDate);

app.get('/raiseBid', listingController.raiseBid);

app.get('/updatePin', listingController.updatePin);

app.get('/pinListing', listingController.pinListing);

app.get('/filter', browseController.filter);

app.get('/submitRating', profileController.submitRating);

app.get('/getRating', profileController.getRating);

app.get('/ratingsuccess', ratingSuccessController.getSuccess);

app.get('/about', aboutController.about);
