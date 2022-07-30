const {createTrainer, getTrainer, updateTrainer, deleteTrainer} = require('../services/trainer');

const postTrainer = async (req,res,next) => {
    try {
        const id = await createTrainer(req.body);
        res.status(201).send({
            idTrainer: id
        });
        next();
    }catch(err){
        res.status(422).send(err.message);
        next();
    }
    next();
}

const getTrainerById = async (req,res,next) => {
    const idTrainer = req.params.idTrainer;

    try{
        const trainer = await getTrainer(idTrainer);
        res.status(200).send(trainer);
    }catch(err){
        res.status(404).send(err.message);
    }
    next();
}

const putTrainerById = (req,res,next) => {
    const idTrainer = req.params.idTrainer;

    try {
        const trainer = await getTrainer(idTrainer, req.body);
        res.status(200).send(trainer);
    } catch (err) {
        res.status(404).send(err.message);
    }
    next();
}

const patchTrainerById = (req,res,next) => {
    const idTrainer = req.params.idTrainer;

    try {
        const message = await updateTrainer(idTrainer, req.body);
        res.status(200).send(message);
        next();
    } catch (err) {
        res.status(404).send(err.message);
        next();
    }
    next();
}

const deleteTrainerById = (req,res,next) => {
    const idTrainer = req.params.idTrainer;

    try {
        const id = await deleteTrainer(idTrainer);
        res.status(200).send({
            idTrainer: id
        });
        next();
    } catch (err) {
        res.status(404).send(err.message);
        next();
    }
    next();
}

module.exports= {
    postTrainer, 
    getTrainerById, 
    putTrainerById, 
    patchTrainerById, 
    deleteTrainerById
}