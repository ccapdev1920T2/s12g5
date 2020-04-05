const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const listingController = {
	getListing: function(req, res) {
		var query = {_id: req.query.listingid}; //verify where it comes from
		db.findOne(Listing, query, projection=null, function(result){
			console.log (req.query.listingid)
			if(result!=null) {
				var photos = [];
				// console.log(result.images.length);
				for(var i = 0; i < result.images.length; i++) {
					photos[i] = {img: result.images[i]};
				}
				var details = {
					productname: result.name,
					producttype: result.type,
					username: result.listingOwner,
					photos: photos,
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

module.exports = listingController