const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');
const Archer = require('../models/ArcherModel.js');
const PinnedListing = require('../models/PinnedModel.js');
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
	},
	raiseBid: function(req, res) {
		var query = {_id: req.query.listingid};
		var update = {highestBid: req.query.highestBid, highestBidder: req.query.highestBidder};
		db.updateOne(Listing, query, update);
	},
	buyOut: function(req, res) {
		var query = {_id: req.query.listingid};
		var update = {highestBid: req.query.buyOutPrice, highestBidder: req.query.highestBidder, status: 'inactive'} ;

		db.updateOne(Listing, query, update);
	},
	updatePin: function(req, res) {
		var query = {listingId: req.query.listingid, archerUsername: req.query.archerUsername};
		var projection = 'archerUsername listingId pinStatus';
		db.findOne(PinnedListing, query, projection, function(result){
			console.log(result);
			res.send(result);
		});
	},
	pinListing: function(req, res) {
		var listing = {
			archerUsername:  req.query.archerUsername,
			listingId: req.query.listingid,
			pinStatus: 'active'
		}

		db.insertOne(PinnedListing, listing, function(flag) {
			
		});
	}
}

module.exports = listingController
