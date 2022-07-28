var express = require('express');
const { getMoviesController, createMovieController, updateMovieController, deleteMovieController } = require('../controllers/movies');
var router = express.Router();

router.get('/api/movies', getMoviesController);
router.post('/api/movies', createMovieController);
router.put('/api/movies', updateMovieController);
router.patch('/api/movies', updateMovieController);
router.delete('/api/movies', deleteMovieController);

module.exports = router;