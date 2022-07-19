const {v4} = require('uuid');
const {insertAlumno} = require('../providers/alumno');

const createAlumno = async (body) => {
    console.log(body)
    const alumno = {
        Id: v4(),
        Name: body.Name,
        Surname: body.Surname,
        Edad: body.Edad
    };

    const idCreated = await insertAlumno(alumno);

    if(!idCreated) {
        throw new Error('TRAINER CREATE ERROR');
    }

    return idCreated;
}

module.exports = {createAlumno}