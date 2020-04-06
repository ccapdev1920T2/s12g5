const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');

const editListingController = {
	getEditListing: function(req, res){
		res.render('editlisting')
	},

	postEditListing: function(req, res){
		var query = {listingId: req.params.listingId}

		var startPrice = req.body.startprice;
		var buyOutPrice = req.body.buyout;
		var description = req.body.desc;
		var images = req.body.images;
		var endDate = req.body.enddate;

		var img = [];

		db.findOne(Listing, query, projection = 'images', function(result){
			for(var i=0;i<result.length; i++){
				img.push(result.images[i]);
			}
		})

		img.push(images);

		var listing = {
			startPrice:startPrice,
			buyOutPrice: buyOutPrice,
			description: description,
			images: img,
			endDate: endDate
		}

		updateOne(Listing, query, listing)

	}
}

module.exports = editListingController