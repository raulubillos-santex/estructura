const { getMovies, createMovie, updateOrCreateMovie, updateMovie, deleteMovie, existMovie } = require('../providers/movies');

const getMoviesService = async () => {
    const list = await getMovies();
    return list;
}

const createMovieService = async (movie) => {
    const existMovieTitle = await existMovie(movie);

    if (!existMovieTitle) {
        const movieCreated = await createMovie(movie);
        return movieCreated;
    } else {
        return false
    }
}

const updateOrCreateMovieService = async (movie) => {
    const movieValue = await updateOrCreateMovie(movie);

    return movieValue
}

const updateMovieService = async (movie) => {
    const movieCreated = await updateMovie(movie);
    if (movieCreated) return true
    else return false
}

const deleteMovieService = async (movie) => {
    const deleteMov = await deleteMovie(movie);

    if (deleteMov) return true
    else return false
}

module.exports = {
    getMoviesService,
    createMovieService,
    updateOrCreateMovieService,
    updateMovieService,
    deleteMovieService,
}