var mongoose = require('mongoose');

var ParticipationSchema = new mongoose.Schema({
    _id: {
        type: String,
        required:false
    },
    archerUsername: {
        type: String,
        required: true
    },
    listingId: {
        type: String,
        required: true
    },
    bid: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Participation', ParticipationSchema);