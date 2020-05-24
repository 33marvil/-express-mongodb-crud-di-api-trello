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

// Endpoint Board
app.post('/boards', container.get('createDataController', Board));
app.get('/boards', container.get('getDataController', Board));

// Endpoint POST /api/Board + lists/id
app.post('/boards/:id/lists', container.get('createDataListController', { list: List, board: Board }));

// Endpoint GET /api/Board/ + boardId + /lists/ + list Id
app.get("/boards/:id/lists", container.get("getAllDataController", { list: List, board: Board }));



module.exports = app;