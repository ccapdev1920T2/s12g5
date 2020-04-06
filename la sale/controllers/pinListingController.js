const db = require('../models/db.js');
const PinnedListing = require('../models/PinnedModel.js');
const Listing = require('../models/ListingModel.js');

const pinnedListingController = {
    getPinListing: function(req, res) {

        var username = "lellings0";
        var query = {archerEmail: username}

        db.findMany(PinnedListing, query=null, projection ='listingId', function(result) {
            var listingIds = []
            for(var i=0; i<result.size;i++) {//fix how to push results to listingIds
                listingIds.push(result[i].listingId)
                console.log(result[i].listingId)
            }

            query = {listingId: listingIds} 
            console.log(listingIds)

            db.findMany(Listing, query, projection = null, function(results){
                var listing = results
                res.render('pinnedlistings', listing)
            })

        })
       
    }
}

module.exports = pinnedListingController