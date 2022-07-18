const {createProfesor, obtainProfesor} = require('../services/profesor');
const {errorCodes} = require('../utils/constant')

const postTrainer = async (req,res,next) => {
    try {
        const id = await createTrianer(req.body);
        res.status(201).send({
            idProfesor: id
        });
        next();
    }catch(err){
        res.status(422).send(err.message);
        next();
    }
    next();
}

const getTrainerById = async (req,res,next) => {
    const idProfesor = req.params.idProfesor;

    try{
        const profesor = await obtainProfesor(idProfesor);
        res.status(200).send(profesor);
    }catch(err){
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
}

const putTrainerById = (req,res,next) => {
    console.log('Este es el put');
    res.status(200).send(req.query);
    next();
}

const patchTrainerById = (req,res,next) => {
    console.log('Este es el patch');
    res.status(200).send(req.query);
    next();
}

const deleteTrainerById = (req,res,next) => {
    console.log('Este es el delete');
    res.status(200).send(req.query);
    next();
}

module.exports= {
    postTrainer, 
    getTrainerById, 
    putTrainerById, 
    patchTrainerById, 
    deleteTrainerById
}