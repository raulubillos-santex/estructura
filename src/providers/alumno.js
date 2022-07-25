const {Alumno} = require('../models')

const insertAlumno = async (alumno) => {
    try {
        const newAlumno = await Alumno.create(alumno);
        return newAlumno.get();
    } catch(err){
        return null;
    }
}
const selectAlumno = async (id) => {
    try{
        const alumno = await Alumno.findByPk(id);
        return alumno.get();
    }catch (err){
        return null;
    }
}
const updateAlumno = async (id, alumno) => {
    try{
        const updatedAlumno = await Alumno.update(alumno, {
            where: {
                id
            }
        });
        return updatedAlumno;
    }catch (err){
        return null;
    }
}
const deleteAlumno = async (id) => {
    try{
        const deletedAlumno = await Alumno.destroy({
            where: {
                id
            }
        });
        return deletedAlumno;
    }catch(err){
        return null;
    }
}

module.exports = {insertAlumno, updateAlumno, selectAlumno}