const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
})