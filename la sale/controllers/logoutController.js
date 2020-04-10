const logoutController = {
	getLogout: function(req, res){
		res.redirect('/userlogin')
	}
}

module.exports = logoutController