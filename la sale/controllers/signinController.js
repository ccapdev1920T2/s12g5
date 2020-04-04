//check efficient way on how to track username for all web pages

const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js')

const signinController = {
	getSignIn: function(req,res){
		res.render('userlogin');
	},

	postSignIn: function (req, res) {
		var query = {username: req.body.username, password: req.body.password};
		console.log(query);

		var projection = null;

		db.findOne(Archer, query, projection, function (result){
			if(result != null){
				res.redirect('browselisting')
			}
		})
	}

	
}

module.exports = signinController