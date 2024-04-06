
const userRoute = require('express').Router();

const { getUsers } = require('../controllers/user.controller');

userRoute.get('/getUsers', getUsers);

module.exports = userRoute;