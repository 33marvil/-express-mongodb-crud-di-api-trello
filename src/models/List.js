const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
    card_lists: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Card",
    }]
}, { timestamps: true });


module.exports = mongoose.model("List", Schema);