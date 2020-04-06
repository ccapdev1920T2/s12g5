var mongoose = require('mongoose');

var ParticipationSchema = new mongoose.Schema({
    id2: {
        type: String,
        unique: true,
        required: false
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