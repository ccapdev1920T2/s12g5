const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');

const editListingController = {
	getEditListing: function(req, res){
		console.log(req.query.listingid)
		res.render('editlisting', {_id: req.query.listingid})
		
	},

	postEditListing: function(req, res){
		var query = {_id: req.body._id}
		console.log(query)

		var buyOutPrice = req.body.buyout;
		var description = req.body.desc;
		if(req.file != null)
			var images = 'uploads/'+req.file.filename;
		var endDate = req.body.enddate;

		var img = [];

		console.log(images)
		console.log(buyOutPrice)
		console.log(description)
		console.log(endDate)

		if(buyOutPrice!=''){
			db.updateOne(Listing, query, {buyOutPrice: buyOutPrice})
		}
		if(description!=''){
			db.updateOne(Listing, query, {description: description})
		}
		if(endDate!=''){
			db.updateOne(Listing, query, {endDate: endDate})
		}
		if(images!=''){
			db.updateOne(Listing, query, {$push: {images: images}})
		}

		res.redirect('/mylistings');
	},

	deleteListing: function(req, res){
		var query = {_id: req.query._id}

		db.deleteOne(Listing, query)

		console.log(query);

		res.redirect('/mylistings')
	},

	getCheckBuyOut: function(req, res) {
		var _id = req.query._id;

		db.findOne(Listing, {_id: _id}, 'buyOutPrice', function (result) {
            res.send(result);
        });
	},

	getCheckEndDate: function(req, res) {
		var _id = req.query._id;

		db.findOne(Listing, {_id: _id}, 'endDate', function (result) {
            res.send(result);
        });
	}
}

module.exports = editListingController