
const testRouter = require('express').Router();


const { homeView } = require('../controllers/test.controller');

testRouter.route('/home')
    .get(homeView)

module.exports = testRouter;

