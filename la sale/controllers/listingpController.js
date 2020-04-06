const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const ListingP = require('../models/ParticipationModel.js')

const listingpController = {
	getListing: function (req,res) {

        var query = { archerUsername: 'lellings0'};
        var projection = 'archerUsername listingId bid';

        db.findMany(ListingP, query, projection, function(result) {
            console.log(result)
            var listingIds = [];
            for(var i=0; i<result.length;i++) {//fix how to push results to listingIds
                listingIds.push(result[i].listingId);
                console.log(result[i]);
            }
            // console.log(listingIds)

            query = {_id: listingIds} ;

            db.findMany(Listing, query, projection, function(results){
                console.log(query)
                var details = {listing: results}
                // console.log(results)
                res.render('listingparticipation', details)
            });

        });
	}
}

module.exports = listingpController