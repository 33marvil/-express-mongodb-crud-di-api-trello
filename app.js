const express = require('express');

const morgan = require('morgan');
const chalk = require('chalk');

const mongoose = require('mongoose'); // npm install mongoose and require

const app = express()

const dotenv = require('dotenv');
require('dotenv').config()
const PORT = process.env.PORT || 3000;

const databaseUrl = process.env.DATABASEURL;
const database = process.env.DATABASENAME;

// const api = require('./src/routes/api');
const api = require('./src/routes/api');


//express version
console.log("**Express Version: ", require('express/package').version);

//setup mongoose and mongoDB
mongoose.connect(databaseUrl, { dbName: database, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connection is successful');
    })
    .catch((err) => console.error(err));

app.use(morgan('combined'));


//test
app.get('/', (req, res) => {
    res.send('API testing api/v1')
})

//CORS
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, Authorization");

    next();
});

app.options("*", (request, response, next) => {
    response.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE"
    );
    response.send(200);

    next();
})

//API route
app.use('/api/v1', api);

//error 404
app.use((request, response) => {
    const ERROR = {
        message: '404. Not Found'
    }
    response
        .status(404)
        .json(ERROR);
});

//error 500
app.use((err, request, response, next) => {
    const ERROR = {
        message: '500. Server Error'
    }
    response
        .status(500)
        .json(ERROR);
});


app.listen(PORT, () => {
    const msg = chalk.yellow(`Node Server is running on PORT: ${PORT}`);

    console.log(msg);
});