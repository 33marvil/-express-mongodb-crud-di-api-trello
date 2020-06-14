const mongoose = require('mongoose');


const deleteListByIdDataController = (getModel) => (req, res, next) => {
    const Board = getModel().board;
    const List = getModel().list;

    const idOfList = req.params.listId;
    const idOfBoard = req.params.boardId;


    console.log(Board, List, "outside");

    // if idOfList existe list_lists
    // remove idOfList of list_lists    
    // find and remove list of List collection OKKKKK

    Board
        .findById(idOfBoard)
        .exec()
        .then((board) => {
            console.log(board.list_lists, "board");
            console.log(idOfList, "idOfList");

            // if exists idOfList(string) in lists_lists(array)(board)
            // console.log(exists, 'idOfList');
            // if (exists !== 1) return res.status(500).json({ type: 'idOfList not found' });
            // if (exists === 1) return res.status(200).json({ type: 'idOfList Found', data: idOfList })
            const index = board.list_lists.indexOf(idOfList);

            if (index > -1) {
                //// delete idOfList of list_lists(array)
                board.list_lists.splice(index, 1);
                console.log(board.list_lists, 'exit');
                //// find and remove list of List collection (okkk)----

                board
                    .save()
                    .then((data) => {
                        // console.log(data);
                        List
                            .findByIdAndDelete(idOfList)
                            .exec()
                            .then((list) => {
                                console.log(list, 'list_lists')
                                res
                                    .json({
                                        type: 'list remove',
                                        data: list
                                    })
                                    .status(200)
                            })
                            .catch((err) => {
                                console.log(`caugth error: ${err}`);
                                return res.status(500).json(err);
                            })

                    })
                    .catch((err) => {
                        console.log(`caugth error: ${err}`);
                        return res.status(500).json(err);
                    });

            } else {
                return res.status(500).json({ type: 'idOfList not found' });
            }
        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });

}

module.exports = deleteListByIdDataController;