const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js')
const ListingP = require('../models/ListingParticipationModel.js')

const browseController = {
	getBrowse: function (req,res) {
		var query = ;

		var x = 'images name description highestBidder highestBid' //limit image to 1

		db.findMany(projection = x, ).
		where('listingId').in(db.find)
	}
}