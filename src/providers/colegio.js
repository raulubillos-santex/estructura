const {Colegio} = require('../models');

const insertColegio = async (colegio) => {
    try {
        const newColegio = await Colegio.create(colegio);
        return newColegio.get('Name');
    } catch(err){
        return null;
    }
}