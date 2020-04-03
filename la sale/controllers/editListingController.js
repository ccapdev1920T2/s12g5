const db = require('../models/db.js');
const Listing = require('../Listing/ListingModel.js');

const editListingController = {
	getEditListing: function(req, res){
		res.render('editlisting')
	}
}