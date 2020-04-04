const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const listingController = {
	getListing: function(req, res) {
		var query = {listingId: req.params.listingId}; //verify where it comes from
		db.findOne(Listing, query, projection=null, function(result){
			if(result!=null) {
				var details = {
					productname: result.name,
					producttype: result.type,
					username: result.listingOwner,
					photos: result.images,
					productdesc: result.description,
					lowrange: result.startPrice,
					highrange: result.buyOutPrice,
					highestbid: result.highestBid,
					highestbidderun: result.highestBidder
				};

				res.render('listing', details)
			}
		})

	}
}