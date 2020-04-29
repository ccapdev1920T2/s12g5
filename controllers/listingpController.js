const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const ListingP = require('../models/ParticipationModel.js')

const listingpController = {
	getListing: function (req,res) {

        var query = {archerUsername: req.session.username}

        db.findMany(ListingP, query, projection=null, function(result) {
            var listingIds = [];
            for(var i=0; i<result.length;i++) {//fix how to push results to listingIds
                listingIds.push(result[i].listingId);
            }

            query = {_id: listingIds, status: 'active'} ;

            db.findMany(Listing, query, projection, function(results){
                var details = {listing: results}
                res.render('listingparticipation', details)
            });

        });
	}
}

module.exports = listingpController
