const {createProfesor, obtainProfesor, updateProfesor} = require('../services/profesor');
const {errorCodes} = require('../utils/constant');
const { putAlumno } = require('./alumno');

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
const putProfesor = async (req,res,next) => {
    try{
        const profesor = await updateProfesor(req.params.id, req.body);
        res.status(201).send(profesor);
        next();
    }catch(err){
        console.log(err)
        res.status(405).send(err.message);
        next();
    }
    next();}

module.exports= {
    postProfesor, 
    getProfesorByIdProfesor,
    putProfesor
}