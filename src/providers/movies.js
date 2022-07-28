const { Movies } = require('../models/movies')

const getMovies = async() => {
    const moviesList = await Movies.findAll();
    return moviesList;
}

const createMovie = async (movie) => {
    await Movies.create({
        ...movie
    }, { isNewRecord: true });

    return true;
}

const updateMovie = async (movie) => {
    const { title, year, rating } = movie;
    

    const findMovie = await Movies.findOne({
        where: {
            Title: title
        }
    });

    if (findMovie) {
        findMovie.set({
            Year: year,
            Rating: rating
          });
        await findMovie.save();
        return true;
    }
    else false
}

const deleteMovie = async (movie) => {

    const findMovie = await Movies.findOne({
        where: {
            Title: movie.title
        }
    });

    if (findMovie) {
        await Movies.destroy({
            where: {
                Title: movie.title
            }
        });
        return true
    }
    else return false
}

const existMovie = async (movie) => {
    const { Title } = movie;
    
    const findMovie = await Movies.findOne({
        where: {
            Title: Title
        }
    }); 
    if (findMovie) return true;
    else return false
}

module.exports = {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    existMovie
}