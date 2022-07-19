var express = require('express');
const {deleteProfesorByIdProfesor, getProfesorByIdProfesor, patchProfesorByIdProfesor, postProfesor, putProfesorByIdProfesor} = require('../controllers/profesor');
var router = express.Router();

router.post('/', postProfesor);

router.get('/:idProfesor', getProfesorByIdProfesor);

router.put('/:idProfesor', putProfesorByIdProfesor);

router.patch('/:idProfesor', patchProfesorByIdProfesor);

router.delete('/:idProfesor', deleteProfesorByIdProfesor);

module.exports = router;