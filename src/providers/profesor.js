const {Profesor} = require('../models')

const insertProfesor = async (profesor) => {
    try {
        const profesorCreated = await Profesor.create(profesor);
        return profesorCreated.get('Id');
    } catch(err){
        return null;
    }
}

const selectProfesorByPK = async (idProfesor) => {
    try {
        const profesor = await Profesor.findOne({
            where:{
                Id: idProfesor
            }
        }, {attributes: ['Name', 'Surname']});
        return profesor.get();
    }catch(err){
        return {
            error: true
        };
    }
}

const updateProfesorById = async (idProfesor, profesor) => {
    try {
        const profesorUpdated = await Profesor.update(profesor, {
            where:{
                Id: idProfesor
            }
        });
        return profesorUpdated;
    } catch(err){
        return {
            error: true
        }
    }
}

module.exports = {insertProfesor, selectProfesorByPK, updateProfesorById}