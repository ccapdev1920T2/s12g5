const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

const ratingSuccessController = {
	getSuccess: function(req,res){
		var details = {
			username: req.query.username
		}
		res.render('ratingsuccess', details);
	}
}

module.exports = ratingSuccessController