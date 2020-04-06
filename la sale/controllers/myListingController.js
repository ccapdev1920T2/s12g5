const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const myListingController = {
    getMyListing: function(req, res) {
        var username = "lellings0"; // hard-coded until phase 3

        var olisting, clisting, ulisting;
        var result = {olisting: null, clisting: null, ulisting: null};


        var query = {listingOwner: username, status: 'active'};
        var query2 = {listingOwner: username, status: 'inactive'};
        var olprojection = 'images name description username highestBid'; //ongoing listings
        var clprojection = 'images name description highestBidder username' //completed listings
        var ulprojection = 'images name description startPrice buyOutPrice' //new listings (no bidders yet)
        db.findMany(Listing, query, olprojection, function(results) {
            result.olisting = results;
           
            db.findMany(Listing, query2, clprojection, function(results) {
                result.clisting = results;
                res.render('mylistings', {olisting: result.olisting, clisting: result.clisting, ulisting: result.ulisting});
            });

        });

    }
}

module.exports = myListingController