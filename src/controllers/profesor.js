const {createProfesor, obtainProfesor} = require('../services/profesor');
const {errorCodes} = require('../utils/constant')

const postProfesor = async (req,res,next) => {
    try {
        const id = await createProfesor(req.body);
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

const getProfesorByIdProfesor = async (req,res,next) => {
    const idProfesor = req.params.idProfesor;

    try{
        const profesor = await obtainProfesor(idProfesor);
        res.status(200).send(profesor);
    }catch(err){
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
}

const putProfesorByIdProfesor = (req,res,next) => {
    console.log('Este es el put');
    res.status(200).send(req.query);
    next();
}

const patchProfesorByIdProfesor = (req,res,next) => {
    console.log('Este es el patch');
    res.status(200).send(req.query);
    next();
}

const deleteProfesorByIdProfesor = (req,res,next) => {
    console.log('Este es el delete');
    res.status(200).send(req.query);
    next();
}

module.exports= {
    postProfesor, 
    getProfesorByIdProfesor, 
    putProfesorByIdProfesor, 
    patchProfesorByIdProfesor, 
    deleteProfesorByIdProfesor
}