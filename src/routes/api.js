//Routes configuration 
const services = require('../../config/services');


// Injection services and dependencies
const container = require('../../container/container')(services);

const { Router } = require('express');
const app = Router();

// Testing Model Board, List, Card
const Board = require('../models/Board');
const List = require('../models/List')
constCard = require('../models/Card');















module.exports = app;