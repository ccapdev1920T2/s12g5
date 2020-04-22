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
            var details = {
                img: '../uploads/'+result.profilePic,
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
        var query = {username: req.session.username};

        if(req.file != null)
            var profilePic =  req.file.filename;
        var password = req.body.password;
        var description = req.body.abouti;

        if(profilePic!=''){
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

        console.log(req.file);
        res.redirect("/editprofileSuccess")
    },
}

module.exports = editProfileController
