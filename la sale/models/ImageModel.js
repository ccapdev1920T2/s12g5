var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
    fileId: {
        type: Number,
        required: true,
        unique: true
    },
    listingId: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    imagetype: {
        type: String,
        enum: ['profile', 'listing'],
        required: true
    },
    folder: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    }

});


module.exports = mongoose.model('Image', ImageSchema);