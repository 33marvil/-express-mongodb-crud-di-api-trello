// services configuration

const homeControllerFactory = require('../src/controllers/homeController');

// require createDataController
const createDataControllerFactory = require('../src/controllers/Boards/createDataController');
const getDataControllerFactory = require('../src/controllers/Boards/getDataController');

const createDataListControllerFactory = require('../src/controllers/Lists/createDataListController');
const getAllDataControllerFactory = require('../src/controllers/Lists/getAllDataController');

const getListByIdDataControllerFactory = require('../src/controllers/Lists/getListByIdDataController');

const putListByIdDataControllerFactory = require('../src/controllers/Lists/putListByIdDataController');

const deleteListByIdDataControllerFactory = require('../src/controllers/Lists/deleteListByIdDataController');

const createDataCardControllerFactory = require('../src/controllers/Cards/createDataCardController');

const getAllCardDataControllerFactory = require('../src/controllers/Cards/getAllCardDataController');

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
    },
    deleteListByIdDataController: (container, data) => {
        const getData = container.get('getData', data);
        return deleteListByIdDataControllerFactory(getData);
    },
    createDataCardController: (container, data) => {
        const getData = container.get('getData', data);
        return createDataCardControllerFactory(getData);
    },
    getAllCardDataController: (container, data) => {
        const getData = container.get('getData', data);
        return getAllCardDataControllerFactory(getData);
    }



}

module.exports = services;