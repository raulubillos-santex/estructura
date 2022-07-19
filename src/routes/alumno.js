var express = require('express');
const { postAlumno } = require('../controllers/alumno');

var route = express.Router();

route.post('/', postAlumno);

module.exports = route;
