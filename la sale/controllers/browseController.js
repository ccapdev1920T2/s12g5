const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');

const browseController = {
	getBrowse: function (req,res) {
		var query = {status: "active"};

		var projection = '_id images name startPrice description buyOutPrice'

		db.findMany(Listing, query, projection, function(results){
		    res.render('browselisting', {
		    products: results}); 
		});
	},

	searchNav: function(req, res) {
		var query = {status: "active"}

		var projection = '_id images name startPrice description buyOutPrice'

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
		    products: items}); 
		});
	},


	filter: function(req, res) {
		var query = {productType: req.query.category, status: "active"}

		var projection = '_id images name startPrice description buyOutPrice'

		console.log(req.query.category)

		db.findMany(Listing, query, projection, function(result){
		    res.render('browselisting', {products: result}); 
		});
	}
}

module.exports = browseController