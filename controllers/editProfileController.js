const db = require('../models/db.js');

const Listing = require('../models/ListingModel.js');
const Archer = require('../models/ArcherModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const editProfileController = {
    getEditProfile: function(req, res) {
        var query = {username: req.session.username}; //check where it comes from
        var projection = 'profilePic firstname lastname username rating idnum college description'

        db.findOne(Archer, query, projection, function(result){
            if(result.rating != null) {
                var rate = result.rating.toFixed(2)
            }
            else{
                var rate = 'none'
            }
            var details = {
                img: result.profilePic,
                firstname: result.firstname,
                lastname: result.lastname,
                username: result.username,
                rating: rate,
                idnum: result.idnum.toString().slice(0,3),
                college: result.college,
                userdesc: result.description
            }

            res.render("editprofile",details)
        });

    },

    postEditProfile: function(req, res) {
        var query = {username: req.session.username};

        if(req.file != null)
            var profilePic =  'uploads/'+req.file.filename;
        var password = req.body.password;
        var description = req.body.abouti;

        if(profilePic!='' && req.file != null){
            db.updateOne(Archer, query, {profilePic:profilePic})
        }
        if(password!=''){
            bcrypt.hash(password, saltRounds, function(err, hash) {
           
                db.updateOne(Archer, query, {password:hash})
           
        });
        }
        if(description!=''){
            db.updateOne(Archer, query, {description:description})
        }

        res.redirect("/editprofileSuccess")
    },
}

module.exports = editProfileController
