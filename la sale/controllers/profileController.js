const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const Archer = require('../models/ArcherModel.js')

const profileController = {
	getProfile: function(req, res) {
		var query = {username: req.query.username}; //check where it comes from
		var projection = 'profilePic firstname lastname email username rating idnum college description'


		db.findOne(Archer, query, projection, function(result){

			if(result.rating != null) {
				var rate = result.rating.toFixed(2)
			}
			else{
				var rate = 'none'
			}
			var details = {
				img: result.profilePic,
				firstname: result.firstname,
				lastname: result.lastname,
				email: result.email,
				username: result.username,
				rating: rate,
				idnum: result.idnum.toString().slice(0,3),
				college: result.college,
				description: result.description,
				session: req.session.username
			}
			//console.log(details)

			query = {listingOwner: req.query.username, status:'active'};
			projection = 'images name description startPrice buyOutPrice' //limit images to 1

			db.findMany(Listing, query, projection, function(result){
				details.products = result;
				res.render('profile', details);
			});
		});

	},

	submitRating: function(req, res) {
		var query = {username: req.query.username};
		var username = req.query.username;
		console.log("username " + req.query.username);
		var send = 1;

		db.findOne(Archer, query, 'rating ratings', function(result){
			var ratings = result.ratings;
			if(ratings == null)
				var ratings = []
			ratings.push(req.query.rating);
			var sum = 0;
			for( var i = 0; i < ratings.length; i++ ){
				sum += parseInt( ratings[i], 10 ); //don't forget to add the base
			}

			var avg = sum/ratings.length;
			var arch = {
				ratings: ratings,
				rating: avg
			}

			db.updateOne(Archer, query, arch);
		})

	},

	getRating: function(req, res) {
		var query = {username: req.query.username};

		db.findOne(Archer, query, 'rating', function(result) {
			res.send(result);
		});
	}
}

module.exports = profileController
