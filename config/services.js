// services configuration

const homeControllerFactory = require('../src/controllers/homeController');

// require createDataController
const createDataControllerFactory = require('../src/controllers/Boards/createDataController');


// require getData services
const getDataFactory = require('../services/getData');

const services = {
    mainController: (container) => homeControllerFactory(),
    getData: (container, data) => {
        return getDataFactory(data);
    },
    createDataController: (container, data) => {
        const getData = container.get('getData', data);
        return createDataControllerFactory(getData);
    }

}

module.exports = services;