const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');
const Archer = require('../models/ArcherModel.js');
const moment = require('moment');

const listingController = {
	getListing: function(req, res) {
		var query = {_id: req.query.listingid}; //verify where it comes from
		db.findOne(Listing, query, projection=null, function(result){
			console.log (req.query.listingid)
			if(result!=null) {
				var photos = [];
				// console.log(result.images.length);
				for(var i = 0; i < result.images.length; i++) {
					photos[i] = {img: result.images[i]};
				}
				var details = {
					productname: result.name,
					producttype: result.type,
					username: result.listingOwner,
					photos: photos,
					productdesc: result.description,
					lowrange: result.startPrice,
					highrange: result.buyOutPrice,
					highestbid: result.highestBid,
					highestbidderun: result.highestBidder
				};
				var date = new Date(result.endDate);
				console.log(moment(result.endDate).format('YYYY-DD-MM HH:mm A'));
				details.endDate = {year: moment(date).format('YYYY'), month: moment(date).format('MM'), day: moment(date).format('DD'), hours: moment(date).format('HH'), minutes: moment(date).format('mm')};
			
		


				query = {username: result.listingOwner}
					db.findOne(Archer, query, projection='profilePic', function(result){
						details.userpic = result.profilePic;
						res.render('listing', details)
					})
			}
		})


	},
	endBidding: function(req, res) {
		var query = {_id: req.query.listingid};
		var update = {status: 'inactive'};
		db.updateOne(Listing, query,update);
	},
	getEndDate: function(req, res) {
		var query = {_id: req.query.listingid};
		var projection = 'endDate';
		db.findOne(Listing, query, projection, function(result) {
			res.send(result);
		});
	}
}

module.exports = listingController
