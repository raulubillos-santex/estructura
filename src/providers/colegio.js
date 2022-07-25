const {Colegio} = require('../models');

const insertColegio = async (colegio) => {
    try {
        const newColegio = await Colegio.create(colegio);
        return newColegio.get('Name');
    } catch(err){
        return null;
    }
}
const selectColegioById = async (idColegio) => {
    try{
        const colegio = await Colegio.findByPk(idColegio);
        return colegio.get();
    }catch{
        return null;
    }
}
const selectAllColegios = async () => {
    try{
        const colegios = await Colegio.findAll();
        return colegios.map(colegio => colegio.get());
    }catch(err){
        return null;
    }
}
const deleteColegio = async (idColegio) => {
    try{
        const colegio = await Colegio.destroy({
            where: {
                id: idColegio
            }
        });
        return colegio;
    }catch(err){
        return null;
    }
}