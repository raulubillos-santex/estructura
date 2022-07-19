const { createAlumno } = require('../services/alumno');
const { errorCodes } = require('../utils/constant')

const postAlumno = async (req, res, next) => {
    try{
        const id = await createAlumno(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(422).send(err.message);
        next();
    }
    next();
}

module.exports ={postAlumno}