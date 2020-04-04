const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

const signupSuccessController = {
	getSuccess: function(req,res){
		firstname= req.query.firstname;
		res.render('signupsuccess', firstname);
	}
}

module.exports = signupSuccessController