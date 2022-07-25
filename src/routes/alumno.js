var express = require('express');
const { postAlumno, getAlumno, putAlumno, deleteAlumno } = require('../controllers/alumno');

var route = express.Router();

route.post('/', postAlumno);
route.get('/:id', getAlumno);
route.put('/:id', putAlumno);
route.delete('/:id', deleteAlumno);

module.exports = route;
