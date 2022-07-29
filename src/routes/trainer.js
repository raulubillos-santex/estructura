var express = require('express');
const {deleteTrainerById, getTrainerById, patchTrainerById, postTrainer, putTrainerById} = require('../controllers/trainer');
var router = express.Router();

router.post('/', postTrainer);
router.get('/:idTrainer', getTrainerById);
router.put('/:idTrainer', putTrainerById);
router.patch('/:idTrainer', patchTrainerById);
router.delete('/:idTrainer', deleteTrainerById);

module.exports = router;