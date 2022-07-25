var express = require('express');
const {postProfesor, getProfesorByIdProfesor, putProfesor} = require('../controllers/profesor');
var router = express.Router();

router.post('/', postProfesor);

router.get('/:idProfesor', getProfesorByIdProfesor);

router.put('/:idProfesor', putProfesor);

module.exports = router;