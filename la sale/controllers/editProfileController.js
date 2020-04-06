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
                firstname: result.firstname,
                lastname: result.lastname,
                username: result.username,
                rating: result.rating,
                idnum: result.idnum.toString().slice(0,3),
                college: result.college,
                userdesc: result.description
            }

            res.render("editprofile",details)
        });
        
    },

    postEditProfile: function(req, res) {
        var query = {username: "lellings0"}

        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var username = req.body.username;
        var idnum =  req.body.idnum;
        var college = req.body.college;
        var description = req.body.description;

        var archer = null

        if(firstname!=null)
            archer.firstname = firstname
        if(lastname!=null)
            archer.lastname = lastname
        if(username!=null)
            archer.username = username
        if(idnum!=null)
            archer.idnum = idnum
        if(college!=null)
            archer.college = college
        if(description!=null)
            archer.description = description

        if(archer!=null){
            db.updateOne(Archer, query, archer, function(result){
                res.redirect("editprofile")
            });
        }
    }
}

module.exports = editProfileController