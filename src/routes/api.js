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

//Trello-APi-Get-List-By-Id
app.get("/boards/:boardId/lists/:listId", container.get("getListByIdDataController", { list: List, board: Board }));

// Endpoint PUT API List By Id
app.put('/boards/:boardId/lists/:listId', container.get("putListByIdDataController", { list: List, board: Board }));

// Endpoint API DELETE List By Id
app.delete('/boards/:boardId/lists/:listId', container.get("deleteListByIdDataController", { list: List, board: Board }));

// Endpoint API POST boards/:boardId/lists/:listId/cards
app.post('/boards/:boardId/lists/:listId/cards', container.get("createDataCardController", { card: Card, list: List, board: Board }));

// Endpoint API GET boards/:boardId/lists/:listId/cards
app.get('/boards/:boardId/lists/:listId/cards', container.get("getAllCardDataController", { card: Card, list: List, board: Board }));


module.exports = app;