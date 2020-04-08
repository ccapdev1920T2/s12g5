//import db and model
//match the content of results to the hbs file
const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');

const browseController = {
	getBrowse: function (req,res) {
		var query = {status: "active"};

		var projection = '_id images name startPrice description buyOutPrice' //limit image to 1

		db.findMany(Listing, query, projection, function(results){
			//console.log(results)
		    res.render('browselisting', {
		    products: results}); //check parsing to an array of objects
		});
	},

	searchNav: function(req, res) {
		var query = {}

		var projection = '_id images name startPrice description buyOutPrice' //limit image to 1

		console.log(req.query.search)

		db.findMany(Listing, query, projection, function(result){
			var items = []
			var string = req.query.search.toLowerCase()
			for(var i=0; i< result.length; i++) {
				if(result[i].name.toLowerCase().includes(string)) {
					items.push(result[i])
					console.log("hello")
				}
			}
			console.log(items)
		    res.render('browselisting', {
		    products: items}); //check parsing to an array of objects
		});
	}
}

module.exports = browseController