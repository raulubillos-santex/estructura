const { obtainTrainer, createTrainer, deleteTrainer } = require('../services/trainer');
const { errorCodes } = require('../utils/constant')

const postTrainer = async (req, res, next) => {
    try {
        const id = await createTrainer(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(422).send(err.message);
        next();
    }
    next();
}

const getTrainerById = async (req, res, next) => {
    const idTrainer = req.params.idTrainer;

    try {
        const trainer = await obtainTrainer(idTrainer);
        res.status(200).send(trainer);
    } catch (err) {
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
}

const putTrainerById = (req, res, next) => {
    console.log('Este es el put');
    res.status(200).send(req.query);
    next();
}

const patchTrainerById = (req, res, next) => {
    console.log('Este es el patch');
    res.status(200).send(req.query);
    next();
}

const deleteTrainerById = async (req, res, next) => {
    const idTrainer = req.params.idTrainer
    try {
        console.log('Este es el delete');
        await deleteTrainer(idTrainer)
        res.status(200).send(req.params.idTrainer);
    } catch (e) {
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
}

module.exports = {
    postTrainer,
    getTrainerById,
    putTrainerById,
    patchTrainerById,
    deleteTrainerById
}