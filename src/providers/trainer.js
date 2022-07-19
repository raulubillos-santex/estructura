const {Trainer} = require('../models')

const insertTrainer = async (trainer) => {
    try {
        const newTrainer = await Trainer.create(trainer);
        return newTrainer.get();
    } catch(err){
        return null;
    }
}
module.exports = {insertTrainer}