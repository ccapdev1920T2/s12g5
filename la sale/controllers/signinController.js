//check efficient way on how to track username for all web pages
const bcrypt = require('bcrypt');
const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js')

const signinController = {
	getSignIn: function(req,res){
		res.render('userlogin');
	},

	postSignIn: function (req, res) {
		var query = {username: req.body.username};
		var password = req.body.password;

		var projection = null;

		db.findOne(Archer, query, projection, function (result){
			if(result != null){
				bcrypt.compare(password, result.password, function(err, equal) {
					if(equal){
						req.session.username = req.body.username;
						res.redirect('/browse');
					}
                     
                    else {
                    }

                });	
			}
			else {
			}
		})
	},

	getCheckID: function(req, res) {
		var username = req.query.username;
		db.findOne(Archer, {username:username}, 'username', function(result) {
			res.send(result);
		}) 
	},

	getCheckLogin: function(req, res) {
		var query = {username: req.query.username};
		var password = req.query.password
		var projection = null;

		db.findOne(Archer, query, projection, function (result){
			if(result != null){
				bcrypt.compare(password, result.password, function(err, equal) {
					if(equal){
						res.send(true)
					}
                     
                    else {
                    	res.send(false)
                    }

                });	
			}
			else {
				res.send(false)
			}
		})
	}
	
}

module.exports = signinController;