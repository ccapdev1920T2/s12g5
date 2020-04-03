//import db and model
//match the content of results to the hbs file
const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')

const browseController = {
	getBrowse: function (req,res) {
		var query = {};

		var projection = 'images name startPrice buyOutPrice'

		db.findMany(Listing, query, projection, function(results){
		    res.render('browselisting', {
		    products: results});
		});
	}
}