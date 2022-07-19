var express = require('express');
const { postTrainer } = require('../controllers/trainers');

var route = express.Router();

route.post('/', postTrainer);

module.exports = route;
