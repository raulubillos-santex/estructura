const {v4} = require('uuid');
const {insertTrainer} = require('../providers/trainer');

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
        throw new Error('TRAINER CREATE ERROR');
    }

    return idCreated;
}

module.exports = {createTrainer}