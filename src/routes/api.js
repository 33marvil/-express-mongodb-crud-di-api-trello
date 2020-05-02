//Routes configuration 
const services = require('../../config/services');


// Injection services and dependencies
const container = require('../../container/container')(services);

const { Router } = require('express');
const app = Router();
















module.exports = app;