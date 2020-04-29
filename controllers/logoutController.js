const logoutController = {
	getLogout: function(req, res){
		req.session.destroy(function(err){
			if(err) throw err;

			res.render('userlogin');
		})
		
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
	}
}

module.exports = logoutController