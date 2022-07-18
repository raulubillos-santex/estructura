const {v4} = require('uuid');
const {insertProfesor, selectProfesorByPK} = require('../providers/profesor');

const createTrainer = async (body) => {
    const trainer = {
        Id: v4(),
        Name: body.Name,
        Surname: body.Surname
    };

    const idCreated = await insertProfesor(trainer);

    if(!idCreated) {
        throw new Error('TRAINER-NOT-CREATED');
    }

    return idCreated;
}

const obtainTrainer = async (idTrainer) => {
    const trainer = await selectProfesorByPK(idTrainer);

    if(trainer.error){
        throw new Error('GENERAL-ERROR');
    }

    if(!trainer){
        throw new Error('TRAINER-NOT-FOUND');
    }

    return trainer;
}

module.exports = {createTrainer, obtainTrainer}