const mongoose = require('mongoose');

const createDataController = getData => (req, res, next) => {
    const Board = getData();
    console.log(Board);
    // console.log(req.body.name);
    const newBoard = new Board({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name

        // list_lists: [{ type: String }]
    });
    console.log(newBoard);
    newBoard
        .save()
        .then(data => {
            res
                .json({
                    type: 'Board created',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })
}










module.exports = createDataController;