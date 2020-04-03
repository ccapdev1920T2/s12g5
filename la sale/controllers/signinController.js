const db = require('../models/db.js');
const Archer = require('../models/Archer.js')

const signinController = {
	getSignIn: function(req,res){
		res.render('/');
	}

	postSignIn: function (req, res) {
		var query = {username: req.params.username, password: req.params.password};

		var projection = '';

		db.findOne(Archer, query, projection, function (result){
			if(result != null){
				res.redirect('/browse?username=' + username)
			}
		})
	}
}