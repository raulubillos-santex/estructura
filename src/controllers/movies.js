const { getMoviesService, createMovieService, updateMovieService, deleteMovieService } = require('../services/movies');
const { v4 } = require('uuid');
const { errorCodes } = require('../utils/constant')

const getMoviesController = async(req, res, next) => {
    const moviesList = await getMoviesService();
    res.status(200).send(moviesList);
    return next();
}

const createMovieController = async (req, res, next) => {

    const { title, year, rating } = req.body

    console.log(typeof(title))
    
    if (title && year && rating && typeof(title) == 'string' && !isNaN(year) && !isNaN(rating) && rating <= 10 && rating >= 0) {
        const movie = {
            Id: v4(),
            Title: req.body.title,
            Year: req.body.year,
            Rating: req.body.rating
        };
    
        const newMovie = await createMovieService(movie);
        if (newMovie) {
            res.status(200).send("Pelicula agregada con exito!");
            return next();
        }
        else {
            res.send('La pelicula ya existe');
        }
        
    } else {
        res.status(400).send('Peticion Erronea');
    }
};

const updateMovieController = async (req, res, next) => {
    
    const movie = {
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating
    };

    const movieUpdated = await updateMovieService(movie);
    if (movieUpdated) {
        res.status(200).send("Datos actualizados con exito!");
        return next();
    }
    else {
        res.send('La Pelicula No Existe!');
    }

    return next();
};

const deleteMovieController = async (req, res, next) => {
    const movie = await deleteMovieService(req.query);

    if (movie) res.status(200).send('Pelicula Eliminada!');
    else res.send('La Pelicula No Existe!');
    
    return next();
}

module.exports = {
    getMoviesController,
    createMovieController,
    updateMovieController,
    deleteMovieController
}