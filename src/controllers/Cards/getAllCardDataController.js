const mongoose = require('mongoose');



const getAllCardDataController = getModel => (req, res, next) => {


    //{ card: Model {card}, list: Model { List }, board: Model { Board } }
    const Card = getModel().card;
    const List = getModel().list;
    const Board = getModel().board;

    console.log(Card, 'Card');
    console.log(List, 'List');
    // console.log(Board);
    // console.log(req.body.name);
    List
        .findOne({ _id: req.params.listId, board: req.params.boardId })
        .exec()
        .then(list => {


            const obj_ids = list.card_lists;
            console.log(list);

            Card
                .find({ _id: { $in: obj_ids } })
                .then((cards) => {
                    console.log(cards);
                    res
                        .json({
                            type: "Cards Found.",
                            data: cards,
                        })
                        .status(200);

                })
                .catch((err) => {
                    console.log(`caugth error: ${err}`);
                    return res.status(500).json(err);
                });


        })







}

module.exports = getAllCardDataController;