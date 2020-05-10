const mongoose = require('mongoose');


const createDataListController = getModel => (req, res, next) => {
    //{ list: Model { List }, board: Model { Board } }
    const List = getModel().list;
    const Board = getModel().board;
    // console.log(List);
    // console.log(req.body.name);
    console.log(Board);

    const newList = new List({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
    });
    console.log(newList._id, 'out newList'); // get info for push

    // verificar si existe board con id en params de endpoint
    // create list
    // res json
    // push de _id lists in arr de list_lists in board
    Board
        .findById(req.params.id)
        .then((data) => {
            res
                .json({
                    type: "Board created",
                    data: data
                })
                .status(200);
        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });



    //     .save()
    //         .then((data) => {
    //             res
    //                 .json({
    //                     type: "List created",
    //                     data: data
    //                 })
    //                 .status(200);
    //         })
    //         .catch((err) => {
    //             console.log(`caugth error: ${err}`);
    //             return res.status(500).json(err);
    //         });
}

module.exports = createDataListController;