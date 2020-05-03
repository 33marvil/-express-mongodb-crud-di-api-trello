// services configuration

const homeControllerFactory = require('../src/controllers/homeController');


// require getData services
const getDataFactory = require('../services/getData');

const services = {
    mainController: (container) => homeControllerFactory(),
    getData: (container, data) => {
        return getDataFactory(data);
    }

}

module.exports = services;