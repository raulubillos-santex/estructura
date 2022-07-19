const { createAlumno, selectAlumnoById,updateAlumnoById, deleteAlumnoById } = require('../services/alumno');
const { errorCodes } = require('../utils/constant')

const postAlumno = async (req, res, next) => {
    try{
        const id = await createAlumno(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(405).send(err.message);
        next();
    }
    next();
}
const getAlumno = async (req, res, next) => {
    try{
        const alumno = await selectAlumnoById(req.params.id);
        res.status(201).send(alumno);
        next();
    }catch(err){
        console.log(err)
        res.status(405).send(err.message);
        next();
    }
    next();
}
const putAlumno = async (req, res, next) => {
    try{
        const alumno = await updateAlumnoById(req.params.id, req.body);
        res.status(201).send(alumno);
        next();
    }catch(err){
        console.log(err)
        res.status(405).send(err.message);
        next();
    }
    next();
}
const deleteAlumno = async (req, res, next) => {
    try{
        const alumno = await deleteAlumnoById(req.params.id);
        res.status(201).send(alumno);
        next();
    }catch(err){
        console.log(err)
        res.status(405).send(err.message);
        next();
    }
    next();
}
module.exports ={postAlumno, getAlumno, putAlumno, deleteAlumno}