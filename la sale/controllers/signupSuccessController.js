const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

const signupSuccessController = {
	getSuccess: function(req,res){
		var details = {
			firstname: req.query.firstname
		}
		res.render('signupsuccess', details);
	}
}

module.exports = signupSuccessController