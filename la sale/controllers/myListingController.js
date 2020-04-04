const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const myListingController = {
    getMyListing: function(req, res) {
        var username = req.params.username;

        var olisting, clisting, ulisting;


        var olprojection = 'images name description username highestBid';
        var query = {listingOwner: username};

        var clprojection = 'images name description highestBidder c username'
        var ulprojection = 'images name description startPrice buyOutPrice'
        db.findMany(Listing, query, olprojection, function(results) {
            olisting = results;
        });

        db.findMany(Listing, query, clprojection, function(results) {
            clisting = results;
        });

        db.findMany(Listing, query, ulprojection, function(results) {
            ulisting = results;
        });

        res.render('mylistings', {olisting: olisting, clisting: clisting, ulisting: ulisting});



       

    }
}

module.exports = myListingController