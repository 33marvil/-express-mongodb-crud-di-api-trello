const mongoose = require('mongoose');


const getListByIdDataController = getData => (req, res, next) => {

    const Board = getData().board;
    const List = getData().list;
    const idOfList = req.params.listId;
    // console.log(Board, List);

    // if Board existe, find List en Board
    // res show List 

    Board
        .findById(req.params.boardId)
        .exec()
        .then((board) => {
            console.log(board.list_lists);
            if (board.list_lists.indexOf(idOfList) !== -1) {
                List.findById(idOfList)
                    .exec()
                    .then((list) => {
                        console.log(list);
                        res
                            .json({
                                type: "List Found.",
                                data: list,
                            })
                            .status(200);
                    })
                    .catch((err) => {
                        console.log(`caugth error: ${err}`);
                        return res.status(500).json(err);
                    });
            } else {

                console.log('Not Found');
                return res.status(500).json({
                    err: "Not Found"
                });

            }


            // const obj_ids = board.list_lists;
            // const obj_ids = ids.map(function(id) {
            //     return mongoose.Types.ObjectId(id);
            // });

            // List.find({ _id: { $in: obj_ids } }).then((lists) => {
            //     console.log(lists);
            //     res
            //         .json({
            //             type: "Lists Found.",
            //             data: lists,
            //         })
            //         .status(200);
            // });
        })
        .catch((err) => {
            console.log(`
                                caugth error: $ { err }
                                `);
            return res.status(500).json(err);
        });




}





module.exports = getListByIdDataController;