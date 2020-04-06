var mongoose = require('mongoose');

var PinnedSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    listingId: {
        type: Number,
        required: true
    },
    pinStatus: {
        type: String,
        enum: ['active', 'inactive'],
        require: true
    }
});


module.exports = mongoose.model('Pinned', PinnedSchema);