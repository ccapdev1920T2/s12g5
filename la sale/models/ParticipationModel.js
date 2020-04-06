var mongoose = require('mongoose');

var ParticipationSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    listingId: {
        type: Number,
        required: true
    },
    bid: {
        type: Number,
        require: true
    }
});


module.exports = mongoose.model('Participation', ParticipationSchema);