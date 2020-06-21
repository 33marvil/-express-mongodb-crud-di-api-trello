const mongoose = require('mongoose');


const createDataCardController = getModel => (req, res, next) => {

    //{ card: Model {card}, list: Model { List }, board: Model { Board } }
    const Card = getModel().card;
    const List = getModel().list;
    const Board = getModel().board;

    console.log(Card, 'Card');
    console.log(List, 'List');
    // console.log(Board);
    // console.log(req.body.name);

    //find List (listId & boardId)
    ////create card
    ////insert cardId in list_cards
    //else catch error

    // console.log(List, 'outside List');

    List
        .findOne({ _id: req.params.listId, board: req.params.boardId })
        .exec()
        .then((list) => {
            console.log(list, 'out list')
            if (list === null) return res.json({ type: "Not Found List" }).status(500);
            const newCard = new Card({
                _id: mongoose.Types.ObjectId(),
                name: req.body.name,
            });
            console.log(newCard, 'outside newCard');

            newCard
                .save()
                .then((card) => {
                    console.log(card, "card saved");
                    list.card_lists.push(card.id)
                    list
                        .save()
                        .then((data) => {
                            // console.log(data);
                            res
                                .json({
                                    type: "Card created",
                                    data: card,
                                })
                                .status(200);
                        })
                        .catch((err) => {
                            console.log(`caugth error: ${err}`);
                            return res.status(500).json(err);
                        });
                })
                .catch((err) => {
                    console.log(`caugth error: ${err}`);
                    return res.status(500).json(err);
                });
        })
        .catch((err) => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        });

}


















module.exports = createDataCardController;