const messagesController = {
    getMessages: function(req, res) {
    	var email = ''
    	if(req.query.email != 'none'){
    		var details = {email : req.query.email}
    		res.render('messages', details)
    	}
    	else{
        	res.render('messages', {email:'to (username)'})
    	}
    }
}

module.exports = messagesController