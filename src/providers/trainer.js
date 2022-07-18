const {Trainer} = require('../models')

const insertTrainer = async (trainer) => {
    try {
        const newTrainer = await Trainer.create(trainer);
        return newTrainer.get('Id');
    } catch(err){
        return null;
    }
}

const selectTrainerByPK = async (idTrainer) => {
    try {
        const trainer = await Trainer.findOne({
            where:{
                Id: idTrainer
            }
        }, {attributes: ['Name', 'Surname']});
        return trainer.get();
    }catch(err){
        return {
            error: true
        };
    }
}

module.exports = {insertTrainer, selectTrainerByPK}