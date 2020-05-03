const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    list_lists: { type: String }

});


module.exports = mongoose.model('Board', Schema);