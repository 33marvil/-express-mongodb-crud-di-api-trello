// services configuration

const homeControllerFactory = require('../src/controllers/homeController');

// require createDataController
const createDataControllerFactory = require('../src/controllers/Boards/createDataController');
const getDataControllerFactory = require('../src/controllers/Boards/getDataController');

const createDataListControllerFactory = require('../src/controllers/Lists/createDataListController');
const getAllDataControllerFactory = require('../src/controllers/Lists/getAllDataController');

const getListByIdDataControllerFactory = require('../src/controllers/Lists/getListByIdDataController');

const putListByIdDataControllerFactory = require('../src/controllers/Lists/putListByIdDataController');


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
    },
    getDataController: (container, data) => {
        const getData = container.get('getData', data);
        return getDataControllerFactory(getData);
    },
    createDataListController: (container, data) => {
        const getData = container.get('getData', data);
        return createDataListControllerFactory(getData);
    },
    getAllDataController: (container, data) => {
        const getData = container.get('getData', data);
        return getAllDataControllerFactory(getData);
    },
    getListByIdDataController: (container, data) => {
        const getData = container.get('getData', data);
        return getListByIdDataControllerFactory(getData);
    },
    putListByIdDataController: (container, data) => {
        const getData = container.get('getData', data);
        return putListByIdDataControllerFactory(getData);
    }


}

module.exports = services;