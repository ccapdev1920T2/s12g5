const db = require('../models/db.js');
const Listing = require('../models/ListingModel.js');
const Archer = require('../models/ArcherModel.js')

const editProfileController = {
    getEditProfile: function(req, res) {
        var query = {username: "lellings0"}; //check where it comes from
        var projection = 'profilePic firstname lastname username rating idnum college description'

        db.findOne(Archer, query, projection, function(result){
            var details = {
                img: result.profilePic,
                name: result.firstname+result.lastname,
                username: result.username,
                rating: result.rating,
                idnum: result.idnum,
                college: result.college,
                userdesc: result.description
            }

            res.render("editprofile",details)
        });
        
    },

    postEditProfile: function(req, res) {
        var query = {username: req.params.username}

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

module.exports = editProfileController