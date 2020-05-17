const mongoose = require('mongoose');


const createDataListController = getModel => (req, res, next) => {
    //{ list: Model { List }, board: Model { Board } }
    const List = getModel().list;
    const Board = getModel().board;
    // console.log(List);
    // console.log(req.body.name);
    console.log(Board);

    // const newList = new List({
    //     _id: mongoose.Types.ObjectId(),
    //     name: req.body.name,
    //     description: req.body.description
    // });
    // console.log(newList._id, 'out newList'); // get info for push

    // verificar si existe board con id en params de endpoint
    // create list
    // res json
    // push de _id lists in arr de list_lists in board
    Board
        .findById(req.params.id)
        .exec()
        .then((board) => {
            console.log(board, 'out board');

            const newList = new List({
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
                description: req.body.description,
                board: board.id
            });
            console.log(newList);

            newList
                .save((err, listSave) => {
                    if (err) throw err;
                    console.log(listSave.id, 'listSave');
                    board.list_lists.push(listSave.id)
                        // listSave.id.push(Board.list_lists);
                    console.log(board);
                    board
                        .save()
                        .then((data) => {
                            // console.log(data);
                            res
                                .json({
                                    type: "List created",
                                    data: listSave,
                                })
                                .status(200);
                        })
                        .catch((err) => {
                            console.log(`caugth error: ${err}`);
                            return res.status(500).json(err);
                        });

                });
        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });


}

module.exports = createDataListController;