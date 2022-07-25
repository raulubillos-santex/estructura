const {v4} = require('uuid');
const {insertProfesor, selectProfesorByPK, updateProfesorById} = require('../providers/profesor');
const { updateAlumnoById } = require('./alumno');

const createProfesor = async (body) => {
    const profesor = {
        Id: v4(),
        Name: body.Name,
        Surname: body.Surname
    };

    const idCreated = await insertProfesor(profesor);

    if(!idCreated) {
        throw new Error('PROFESOR-NOT-CREATED');
    }

    return idCreated;
}

const obtainProfesor = async (idProfesor) => {
    const profesor = await selectProfesorByPK(idProfesor);

    if(profesor.error){
        throw new Error('GENERAL-ERROR');
    }

    if(!profesor){
        throw new Error('PROFESOR-NOT-FOUND');
    }

    return profesor;
} 

const updateProfesor = async (idProfesor, profesor) => {
    const profesorUpdated = await updateAlumnoById(idProfesor, profesor);

    if(profesorUpdated.error){
        throw new Error('GENERAL-ERROR');
    }
    if(!profesorUpdated){
        throw new Error('PROFESOR-NOT-FOUND');
    }
    return profesorUpdated;

}

module.exports = {createProfesor, obtainProfesor, updateProfesor}