const {v4} = require('uuid');
const {insertTrainerDB, selectTrainerById, updateTrainerDB, deleteTrainerDB} = require('../providers/trainer');

const createTrainer = async (body) => {
    const trainer = {
        Id: v4(),
        Name: body.Name,
        Surname: body.Surname,
        League: body.League
    };

    const idCreated = await insertTrainerDB(trainer);
    if(!idCreated) {
        throw new Error('TRAINER-NOT-CREATED');
    }
    return idCreated;
}

const getTrainer = async (idTrainer) => {
    const trainer = await selectTrainerById(idTrainer);

    if(trainer.error){
        throw new Error('GENERAL-ERROR');
    }
    if(!trainer){
        throw new Error('TRAINER-NOT-FOUND');
    }
    return trainer;
}

const updateTrainer = async (idTrainer, body) => {
    const trainer = {
        Id: idTrainer,
        Name: body.Name,
        Surname: body.Surname,
        League: body.League
    };

    const message = await updateTrainerDB(trainer);

    if(!message){
        throw new Error('TRAINER-NOT-FOUND');
    }
    return message;
}

const deleteTrainer = async (idTrainer) => {
    const deleted = await deleteTrainerDB(idTrainer);

    if(deleted.error){
        throw new Error('GENERAL-ERROR');
    }
    if(!deleted){
        throw new Error('TRAINER-NOT-FOUND');
    }
    return deleted;
}

module.exports = {createTrainer, getTrainer, updateTrainer, deleteTrainer}