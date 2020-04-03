const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');


const editProfileController = {
    getEdit: function(req, res) {
        res.render('editprofile');
    },

    postEdit: function(req, res) {
        var query = {username: req.params.listing}

        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var username = req.body.username;
        var idnum =  req.body.idnum;
        var college = req.body.college;
        var description = req.body.description;

        var archer = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            idnum: idnum,
            college: college,
            description: description
        }

        updateOne(Archer, query, archer);
    }
}

