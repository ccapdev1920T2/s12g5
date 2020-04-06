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
				console.log('login successful');
				res.redirect('/browse');
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