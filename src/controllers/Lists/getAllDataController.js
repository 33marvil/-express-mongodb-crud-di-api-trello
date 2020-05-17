const mongoose = require('mongoose');

const getAllDataController = getData => (req, res, next) => {
    //{ list: Model { List }, board: Model { Board } }
    const Board = getData();
    const List = getData();

    // console.log(List);
    // console.log(req.body.name);
    // console.log(Board, 'out Board');


    // verificar si existe Board
    // if Board Id existe obtener All lists
    //
    Board.findById(req.params.id)
        .exec()
        .then((board) => {
            console.log(board, "out board");
            //para revisar
            Board
                .find({
                    '_id': {
                        $in: [mongoose.Types.ObjectId()]
                    },

                });

        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });

}



module.exports = getAllDataController;