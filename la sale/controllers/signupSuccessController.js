const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

const signupSuccessController = {
	getSuccess: function(req,res){
		firstname: req.params.firstname;
		res.render('signupsuccess', firstname);
	}
}

module.exports = signupSuccessController