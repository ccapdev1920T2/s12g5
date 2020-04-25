//resolve all ???
const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');
const { validationResult } = require('express-validator');
const createListingController = {
	getCreateListing: function(req, res) {
    	res.render('createlisting', {});
	},

	postCreateListing: function(req,res) {
		var errors = validationResult(req);
		var name = req.body.name;
		var brand = req.body.brand;
		var startPrice = req.body.startprice;
		var buyOutPrice = req.body.buyout;
		var description = req.body.desc;
		if(req.file != null)
			var images = 'uploads/'+req.file.filename;
		var startDate = Date.now();
		var endDate = req.body.enddate;
		var listingOwner = req.session.username;
		var productType = req.body.type;
		var status = 'active';

		var img = [];
		img.push(images);

		if(!errors.isEmpty()) {
			errors = errors.errors;
			var details = {};
			for(i = 0; i < errors.length; i++)
				details[errors[i].param + 'Error'] = errors[i].msg;

			res.render('createlisting', details);
		}
		else {
			var listing = {
				name: name,
				brand: brand,
				startPrice:Number(startPrice),
				buyOutPrice: Number(buyOutPrice),
				description: description,
				images: img,
				startDate: startDate,
				endDate: endDate,
				highestBidder: null,
				highestBid: null,
				listingOwner: listingOwner,
				productType: productType,
				status: 'active'
			}
	
			db.insertOne(Listing, listing, function(flag) {
				if(flag)
					res.redirect('browse')
			});
		}

		
	}
}

module.exports = createListingController