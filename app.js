const express = require('express');

const morgan = require('morgan');
constchalk = require('chalk');

const app = express()

const dotenv = require('dotenv');
require('dotenv').config()
const port = process.env.PORT || 3000;



console.log("**Express Version: ", require('express/package').version);
// Api route


app.use(morgan('combined'));





app.listen(port, () => console.log(`Server on port ${port}`));