const mongoose = require('mongoose');


const getDataController = getData => (req, res, next) => {
    const Board = getData();
    // console.log(Board);
    // console.log(req.body.name);
    Board
        .find()
        .exec()
        .then(data => {
            res
                .json({
                    type: 'Reading companies',
                    data: data
                })
                .status(200)
        })
        .catch(err => {
            console.log(`caugth error: ${err}`);
            return res.status(500).json(err);
        })

}




module.exports = getDataController;