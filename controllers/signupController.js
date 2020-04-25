const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { validationResult } = require('express-validator');

const signupController = {
	getSignUp: function(req,res){
		res.render('signup');
	},

	postSignUp: function(req,res){
		var errors = validationResult(req);
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

			
			if(!errors.isEmpty()) {
				errors = errors.errors;

				var details = {};
				for(i = 0; i < errors.length; i++)
					details[errors[i].param + 'Error'] = errors[i].msg;

				res.render('signup', details);
			}
			else {
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
							res.redirect("/signupsuccess?firstname="+firstname);
						}
					})
			}
		});
	},

	getCheckID: function(req, res) {
		var idnum = req.query.idnum;

		db.findOne(Archer, {idnum: idnum}, 'idnum', function (result) {
            res.send(result);
        });
	},

	getCheckEmail: function(req, res) {
		var email = req.query.email;

		db.findOne(Archer, {email: email}, 'email', function (result) {
            res.send(result);
        });

	},

	getCheckUsername: function (req, res) {
		var username = req.query.username;

		db.findOne(Archer, {username: username}, 'username password', function (result) {
            res.send(result);
		});

	}
}

module.exports = signupController
