const { obtainTrainer, createTrainer, deleteTrainer, patchTrainer, putTrainer } = require('../services/trainer');
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
};

const putTrainerById = async (req, res, next) => {
    try {
        const id = await putTrainer(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(422).send(err.message);
        next();
    }
    next();
};

const patchTrainerById = (req, res, next) => {
    try {
        const id = await patchTrainer(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(422).send(err.message);
        next();
    }
    next();
};

const deleteTrainerById = async (req, res, next) => {
    const idTrainer = req.params.idTrainer
    try {
        console.log('Este es el delete');
        await deleteTrainer(idTrainer)
        res.status(200).send(req.params.idTrainer);
    } catch (err) {
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
};

module.exports = {
    postTrainer,
    getTrainerById,
    putTrainerById,
    patchTrainerById,
    deleteTrainerById
}