const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

		

		bcrypt.hash(password, saltRounds, function(err, hash) {

            var archer = {
			email: email,
			firstname: firstname,
			lastname: lastname,
			username: username,
			password: hash,
			college: college,
			birthday: birthday,
			idnum: idnum,
			ratings: ratings,
			rating: rating,
			description: description,
			posted: posted
			}

            /*
                calls the function insertOne()
                defined in the `database` object in `../models/db.js`
                this function adds a document to collection `users`
            */
            db.insertOne(Archer, archer, function(flag){
				if(flag){
					console.log(archer);
					res.redirect("/signupsuccess?firstname="+firstname);
				}
			})
        });
		
	}
}

module.exports = signupController
