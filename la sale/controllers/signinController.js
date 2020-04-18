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
		console.log(query);

		var projection = null;

		db.findOne(Archer, query, projection, function (result){
			if(result != null){
				bcrypt.compare(password, result.password, function(err, equal) {
					if(equal){
						console.log('login successful');
						req.session.username = req.body.username;
						res.redirect('/browse');
					}
                     
                    else {
                    	console.log('wrong password');
                    }

                });	
			}
			else {
				console.log("no user found");
			}
		})
	},

	getCheckID: function(req, res) {
		var username = req.query.username;
		db.findOne(Archer, {username:username}, 'username', function(result) {
			res.send(result);
		}) 
	},

	getCheckPW: function(req, res) {
		var password = req.query.password;
		db.findOne(Archer, {password:password}, 'password', function(result) {
			res.send(result);
		}) 
	}
	
}

module.exports = signinController;