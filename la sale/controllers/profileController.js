const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const Archer = require('../models/ArcherModel.js')

const profileController = {
	getProfile: function(req, res) {
		var query = {username: req.query.username}; //check where it comes from
		var projection = 'profilePic firstname lastname username rating idnum college description'

		db.findOne(Archer, query, projection, function(result){
			var details = {
				img: result.profilePic,
				name: result.firstname+result.lastname,
				username: result.username,
				rating: result.rating,
				idnum: result.idnum.toString().slice(0,3),
				college: result.college,
				description: result.description
			}
			console.log(details)

			query = {listingOwner: req.query.username};
			projection = 'images name description startPrice buyOutPrice' //limit images to 1

			db.findMany(Listing, query, projection, function(result){
				details.products = result;
				res.render('profile', details);
			});
		});
		
	}
}

module.exports = profileController