const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const myListingController = {
    getMyListing: function(req, res) {
        var username = "lellings0"; // hard-coded until phase 3

        var olisting, clisting, ulisting;
        var result = {olisting: null, clisting: null, ulisting: null};


        var query = {listingOwner: username, status: 'active'};
        var query2 = {listingOwner: username, status: 'inactive'};
        db.findMany(Listing, query, projection=null, function(results) {
            result.olisting = results;
           
            db.findMany(Listing, query2, clprojection=null, function(results) {
                result.clisting = results;
                res.render('mylistings', {olisting: result.olisting, clisting: result.clisting, ulisting: result.ulisting});
            });

        });

    }
}

module.exports = myListingController