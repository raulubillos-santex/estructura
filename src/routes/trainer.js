var express = require('express');
//const {deleteProfesorByIdProfesor, getProfesorByIdProfesor, patchProfesorByIdProfesor, postProfesor, putProfesorByIdProfesor} = require('../controllers/profesor');
const { getTrainerById, putTrainerById, patchTrainerById, deleteTrainerById, postTrainer } = require('../controllers/trainer');
var router = express.Router();

router.post('/', postTrainer);

router.get('/:idTrainer', getTrainerById);

router.put('/:idTrainer', putTrainerById);

router.patch('/:idTrainer', patchTrainerById);

router.delete('/:idTrainer', deleteTrainerById);
module.exports = router;