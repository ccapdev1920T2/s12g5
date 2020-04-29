const db = require('../models/db.js');
const PinnedListing = require('../models/PinnedModel.js');
const Listing = require('../models/ListingModel.js');

const pinnedListingController = {
    getPinListing: function(req, res) {

        var username = req.session.username;
        var query = {archerUsername: username}

        db.findMany(PinnedListing, query, projection = null, function(result) {
            var listingIds = []
            for(var i=0; i<result.length;i++) {//fix how to push results to listingIds
                listingIds.push(result[i].listingId)
            }

            query = {_id: listingIds, status: 'active'} 

            db.findMany(Listing, query, projection = null, function(results){
                var details = {listing: results}
                res.render('pinnedlistings', details)
            })

        })  
    },

    deletePin: function(req, res) {
        var query = {listingId: req.query._id, archerUsername: "lellings0"}
        db.deleteOne(PinnedListing, query)
    }
}

module.exports = pinnedListingController