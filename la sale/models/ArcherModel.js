var mongoose = require('mongoose');

var ArcherSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    college: {
        type: String,
        enum: ['CCS', 'COB', 'SOE', 'BAGCED', 'GCOE', 'COS', 'COL', 'CLA'],
        required: true
    },
    birthday: {
        type: Date,
        required: false
    },
    idnum: {
        type: Number,
        required: true
    },
    ratings: {
        type: [Number],
        required: false
    },
    rating: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    profilePic: {
        type: String,
        required: false
    },
    posted: {
        type: [String],
        required: false
    }

});

module.exports = mongoose.model('Archer', ArcherSchema);