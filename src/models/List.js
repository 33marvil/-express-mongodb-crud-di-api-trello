const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    cards: [{ _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }, name: { type: String } }],
    board: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Board' }],
}, { timestamps: true });



module.exports = mongoose.model('List', Schema);