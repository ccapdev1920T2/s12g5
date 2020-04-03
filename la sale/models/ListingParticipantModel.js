var mongoose = require('mongoose');

var ListingParticipantSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    listingId: {
        type: Number,
        required: true
    },
    bid: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('ListingParticipant', ListingParticipantSchema);