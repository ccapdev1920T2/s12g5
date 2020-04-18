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
                //console.log(result[i])
            }
            // console.log(listingIds)

            query = {_id: listingIds} 

            db.findMany(Listing, query, projection = null, function(results){
                //console.log(query)
                var details = {listing: results}
                //console.log(results)
                res.render('pinnedlistings', details)
            })

        })  
    },

    deletePin: function(req, res) {
        var query = {listingId: req.query._id, archerUsername: "lellings0"}
        console.log(query)
        db.deleteOne(PinnedListing, query)
    }
}

module.exports = pinnedListingController