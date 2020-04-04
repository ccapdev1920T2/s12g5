//resolve all ???
const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')

const createListingController = {
	getCreateListing: function(req, res) {
    	res.render('createlisting', {});
	},

	postCreateListing: function(req,res) {
		var name = req.body.name;
		var brand = req.body.brand;
		var startPrice = req.body.startprice;
		var buyOutPrice = req.body.buyout;
		var description = req.body.desc;
		var images = req.body.images;
		var startDate = req.body.startdate;
		var endDate = req.body.enddate;
		// var listingOwner = ???;
		var productType = req.body.type;
		// var status = ???;

		var listing = {
			// listingId:????,
			name: name,
			brand: brand,
			startPrice:startPrice,
			buyOutPrice: buyOutPrice,
			description: description,
			images: images,
			startDate: startDate,
			endDate: endDate,
			highestBidder: null,
			highestBid: null,
			// listingOwner: ???;
			productType: productType,
			// status: ???;
		}

		db.insertOne(Listing, listing, function(flag) {
			if(flag) {
				res.redirect('browselisting')
			}
		});
	}
}

