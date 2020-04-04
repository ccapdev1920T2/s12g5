var mongoose = require('mongoose');

var PinnedListingSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    listingId: {
        type: Number,
        required: true
    },
    pinStatus: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    }
});

module.exports = mongoose.model('PinnedListing', PinnedListingSchema);