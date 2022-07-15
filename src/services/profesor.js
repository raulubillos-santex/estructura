const {v4} = require('uuid');
const {insertProfesor, selectProfesorByPK} = require('../providers/profesor');

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

module.exports = {createProfesor, obtainProfesor}