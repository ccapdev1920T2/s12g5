const nodemailer = require('nodemailer');
const db = require('../models/db.js');
const Archer = require('../models/ArcherModel.js');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'delasalebids@gmail.com',
		pass:'trishabrycejed'
	}

});




const messagesController = {
    getMessages: function(req, res) {
    	var username = ''
    	if(req.query.username != 'none'){
    		var details = {username : req.query.username}
    		res.render('messages', details)
    	}
    	else{
        	res.render('messages', {username:''})
    	}
	},

	getSendMessage: function(req, res) {
		var message = req.query.message;
		var username = req.query.username;
		db.findOne(Archer, {username:username}, 'email', function(result) {
			if(result == null){
				res.send(false)
				return false;
			}

			toEmail = result.email;
			var mailOptions = {
				from: 'delasalebids@gmail.com',
				to: toEmail,
				subject:'De La Sale | Message from: ' + req.session.username,
				text: message
			};

			transporter.sendMail(mailOptions, function(error, info) {
				if(error) {
					res.send(false);
				}
				else {
					res.send(true);
				}
			});
		});
	}
}

module.exports = messagesController
