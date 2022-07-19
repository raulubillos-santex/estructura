const {v4} = require('uuid');
const {insertAlumno, updateAlumno, selectAlumno, deleteAlumno} = require('../providers/alumno');

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
        throw new Error('CREATE ALUMNO ERROR');
    }

    return idCreated;
}

const selectAlumnoById = async (id) => {
    console.log(id)
    const alumno = await selectAlumno(id);
    if(!alumno) {
        throw new Error('SELECT ALUMNO ERROR');
    }
    return alumno;
}

const updateAlumnoById = async (id, body) => {
    console.log(id, body);
    const alumno = await selectAlumno(id);
    if(!alumno) {
        throw new Error('Alumno no existe, no se pudo actualizar');
    }
    const updatedAlumno = await updateAlumno(id, body);
    return updatedAlumno;
}
const deleteAlumno = async (id) => {
    console.log(id);
    const deletedAlumno = await deleteAlumno(id);
    if(!deletedAlumno) {
        throw new Error('DELETE ALUMNO ERROR');
    }
    return deletedAlumno;
}

module.exports = {createAlumno, selectAlumnoById, updateAlumnoById, deleteAlumno}