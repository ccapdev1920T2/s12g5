const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

const signupController = {
	getSignUp: function(req,res){
		res.render('signup');
	},

	postSignUp: function(req,res){
		var email = req.body.email;
		var firstname = req.body.fname;
		var lastname = req.body.lname;
		var username = req.body.username;
		var password = req.body.password;
		var college = req.body.college;
		var birthday = req.body.bday;
		var idnum = req.body.idnum;
		var ratings = null;
		var rating = null;
		var description = null;
		var posted = null;

		var archer = {
			email: email,
			firstname: firstname,
			lastname: lastname,
			username: username,
			password: password,
			college: college,
			birthday: birthday,
			idnum: idnum,
			ratings: ratings,
			rating: rating,
			description: description,
			posted: posted
		}

		db.insertOne(Archer, archer, function(flag){
			if(flag){
				console.log(archer);
				res.redirect("/signupsuccess?firstname="+firstname);
			}
			else {
				console.log('datatype error');
			}
		})
	},
	
	uniqueIdnum: function(req, res) {
		var idnum = req.query.idnum;

		db.findOne(Archer, {idnum: idnum}, 'idnum', function(result){
			res.send(result);
		});
	},

	uniqueUsername: function(req, res) {
		var username = req.query.username;

		db.findOne(Archer, {username: username}, 'username', function(result){
			res.send(result);
		});
	},

	uniqueEmail: function(req, res) {
		var email = req.query.email;

		db.findOne(Archer, {email: email}, 'email', function(result){
			res.send(result);
		});
	},
}

module.exports = signupController
