const mongoose = require('mongoose');


const putListByIdDataController = getData => (req, res, next) => {

    const Board = getData().board;
    const List = getData().list;
    const idOfList = req.params.listId;
    const idOfBoard = req.params.boardId;
    console.log(Board, List, 'outside');

    // if Board existe

    // find List in list_lists of board
    // put list
    // res show List
    // catch

    // find list for id board   (**mongoose method for update with 2 queries -idList - idBoard**)

    Board.findById(idOfBoard)
        .exec()
        .then((board) => {
            console.log(board.list_lists, "board");
            if (idOfBoard === null)
                return res.status(500).json({ type: "board Null - Error." });
            console.log(board, "outside");
            // board (atributos) -list_lists
            // req.params (boardId)
            // req.params (listId)
            // req.body (name)

            List
                .findById(idOfList)
                .exec()
                .then((list) => {
                    console.log(list, 'list outside');
                    // list - propiedades - .name .id .board .createdAt .updatedAt 
                    // req.body.name - body - user
                    if (list === null) return res.status(500).json({ type: "List Null - error." });


                    // revisar el typeOf a evaluar
                    if (req.body.name === "") return res.status(500).json({ type: "req.body.name Null -error." });
                    //
                    if (req.body.name === list.name) return res.status(200).json({
                        type: "List updated",
                        data: list
                    });

                    list.name = req.body.name
                    console.log(list, 'list updated ***');

                    list
                        .save()
                        .then((list) => {
                            console.log(list);
                            res
                                .json({
                                    type: "List updated.",
                                    data: list,
                                })
                                .status(200);
                        })
                        .catch((err) => {
                            console.log(`caugth error: ${err}`);
                            return res.status(500).json(err);
                        });

                })

        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });
}










module.exports = putListByIdDataController;