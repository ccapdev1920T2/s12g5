const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const Archer = require('../models/ArcherModel.js')

const profileController = {
	getProfile: function(req, res) {
		var query = {username: req.params.username}; //check where it comes from

		var projection = 'profilePic firstname lastname username rating idnum college description'

		db.findOne(Archer, query, projection, function(result){
			var details = {
				img: result.profilePic,
				name: result.firstname+result.lastname,
				username: username,
				rating: rating,
				idnum: idnum,
				college: college
			}
		})

		query = {listingOwner: req.params.username};
		projection = 'images name description startPrice buyOutPrice' //limit images to 1

		db.findMany(Listing, query, projection, function(result){
			details.products = result

			res.render('profile', details)
		})
	}
}

module.exports = profileController