const express = require('express');

const morgan = require('morgan');
const chalk = require('chalk');

const mongoose = require('mongoose'); // npm instal mongoose and require

const app = express()

const dotenv = require('dotenv');
require('dotenv').config()
const port = process.env.PORT || 3000;

const databaseUrl = process.env.DATABASEURL;
const database = process.env.DATABASENAME;

// const api = require('./src/routes/api');

console.log("**Express Version: ", require('express/package').version);
// Api route


//setup mongoose and mongoDB
mongoose.connect(databaseUrl, { dbName: database })
    .then(() => {
        console.log('Connection is successful');
    })
    .catch((err) => console.error(err));

app.use(morgan('combined'));





app.listen(port, () => console.log(`Server on port ${port}`));