//import db and model
//match the content of results to the hbs file
const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')

const browseController = {
	getBrowse: function (req,res) {
		var query = {};

		var projection = 'images name startPrice description buyOutPrice listingid' //limit image to 1

		db.findMany(Listing, query, projection, function(results){
		    res.render('browselisting', {
		    products: results}); //check parsing to an array of objects
		});
	}
}

module.exports = browseController