const db = require('../models/db.js');
const PinnedListing = require('../models/PinnedListingModel.js');

const pinnedListingController = {
    postPinListing: function(req, res) {

        var listing = {
            username: null,
            listingId: null,
            pinStatus: null
        }
  

        db.insertOne(PinnedListing, liting, function(flag) {
            if(flag) {
                console.log('listing pinned');
                // res.redirect('')ajax
            }
        })
    }
}