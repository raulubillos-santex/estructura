const {v4} = require('uuid');
const {insertTrainer, selectTrainerByPK, deleteTrainerById, putTrainerInDB} = require('../providers/trainer');

const obtainTrainer = async (idTrainer) => {
    const trainer = await selectTrainerByPK(idTrainer);

    if(trainer.error){
        throw new Error('GENERAL-ERROR');
    }

    if(!trainer){
        throw new Error('TRAINER-NOT-FOUND');
    }

    return trainer;
};

const createTrainer = async (body) => {
    console.log(body)
    const trainer = {
        Id: v4(),
        Name: body.Name,
        Surname: body.Surname,
        Edad: body.Edad
    };

    const idCreated = await insertTrainer(trainer);

    if(!idCreated) {
        throw new Error('TRAINER-NOT-CREATED');
    }

    return idCreated;
}

const putTrainer = async (id, body) => {
    //console.log(body)
    const trainer = {
        Id: id,
        Name: body.Name,
        Surname: body.Surname,
        Edad: body.Edad
    };

    const idCreated = await putTrainerInDB(trainer);

    if(!idCreated) {
        throw new Error('TRAINER-NOT-CREATED');
    }

    return idCreated;
}



const deleteTrainer = async ( idTrainer) => {
    const trainer = await deleteTrainerById(idTrainer);

    if(trainer.error){
        throw new Error('GENERAL-ERROR');
    }

    if(!trainer){
        throw new Error('TRAINER-NOT-FOUND');
    }

    return trainer;
};

module.exports = {createTrainer, obtainTrainer, deleteTrainer, putTrainer}