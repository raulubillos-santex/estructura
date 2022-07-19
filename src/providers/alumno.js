const {Alumno} = require('../models')

const insertAlumno = async (alumno) => {
    try {
        const newAlumno = await Alumno.create(alumno);
        return newAlumno.get();
    } catch(err){
        return null;
    }
}
module.exports = {insertAlumno}