const db = require('../models/db.js');
const Listing = require('../Listing/ListingModel.js');

const editListingController = {
	getEditListing: function(req, res){
		res.render('editlisting')
	},

	postEditListing: function(req, res){
		var query = {username: req.params.listingId}

		var startPrice = req.body.startprice;
		var buyOutPrice = req.body.buyout;
		var description = req.body.desc;
		var images = req.body.images;
		var endDate = req.body.enddate;

		var listing = {
			startPrice:startPrice,
			buyOutPrice: buyOutPrice,
			description: description,
			images: images,
			endDate: endDate
		}

		updateOne(Listing, query, listing)

	}
}