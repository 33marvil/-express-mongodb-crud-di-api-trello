const mongoose = require('mongoose');

// const List = require("../../models/List");

const getAllDataController = getData => (req, res, next) => {
    //{ list: Model { List }, board: Model { Board } }
    const Board = getData().board;

    const List = getData().list;

    console.log(Board, List);
    // console.log(List);

    // verificar si existe Board
    // if Board Id existe obtener All lists

    // Recorrer lislt_lists
    //para _id encontrar la lista
    // guardar en Array el obj encontrado
    //res array complete
    Board
        .findById(req.params.id)
        .exec()
        .then((board => {
            // console.log(board.list_lists, 'no value');

            const obj_ids = board.list_lists;
            // const obj_ids = ids.map(function(id) {
            //     return mongoose.Types.ObjectId(id);
            // });

            List
                .find({ _id: { $in: obj_ids } })
                .then((lists) => {
                    console.log(lists);
                    res
                        .json({
                            type: "Lists Found.",
                            data: lists,
                        })
                        .status(200);

                });

        }))
}


module.exports = getAllDataController;