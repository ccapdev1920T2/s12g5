const logoutController = {
	getLogout: function(req, res){
		req.session.destroy(function(err){
			if(err) throw err;

			res.redirect('/userlogin')
		})
		
	}
}

module.exports = logoutController