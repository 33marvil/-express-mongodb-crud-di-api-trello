//Routes configuration 
const services = require('../../config/services');


// Injection services and dependencies
const container = require('../../container/container')(services);

const { Router } = require('express');
const app = Router();

// Testing Model Board, List, Card
const Board = require('../models/Board');
const List = require('../models/List')
const Card = require('../models/Card');


// testing 
app.get('/', container.get('mainController'));

// Testing Endpoint Board
app.post('/boards', container.get('createDataController', Board));












module.exports = app;