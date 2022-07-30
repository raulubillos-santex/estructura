const { Trainer } = require('../models/index')

const insertTrainerDB = async (trainer) => {
    try {
        const newTrainer = await Trainer.create(trainer);
        return newTrainer.get('Id');
    } catch(err){
        return null;
    }
}

const selectTrainerById = async (idTrainer) => {
    try {
        const trainer = await Trainer.findOne({
            where:{
                Id: idTrainer
            }
        }, {attributes: ['Name', 'Surname', 'League']});
        return trainer.get();
    }catch(err){
        return {
            error: true
        };
    }
}

const updateTrainerDB = async (idTrainer, body) => {
    try {
        const trainer = await Trainer.findOne({
            where: {
                Id: idTrainer
            }
        });
        await trainer.update(body);
        const updated = await trainer.save();
        return updated;
    } catch(err){
        return null;
    }
}

const deleteTrainerDB = async (idTrainer) => {
    try {
        const deleted = await Trainer.destroy({
            where:{
                Id: idTrainer
            }
        });
        return deleted;
    } catch(err){
        return null;
    }
}

module.exports = {insertTrainerDB, selectTrainerById, updateTrainerDB, deleteTrainerDB}