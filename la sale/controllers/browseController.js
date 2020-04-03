//import db and model
//match the content of results to the hbs file

const browseController = {
	getBrowse: function (req,res) {
		var query = {};

		var projection = 'images name startPrice buyOutPrice'

		db.find(Listing, query, projection, function(results){
		    res.render('browselisting', {
		    products: results});
		}
	}
}