const { createTrainer } = require('../services/trainer');
const { errorCodes } = require('../utils/constant')

const postTrainer = async (req, res, next) => {
    try{
        const id = await createTrainer(req.body);
        res.status(201).send(id);
        next();
    } catch (err) {
        console.log(err)
        res.status(422).send(err.message);
        next();
    }
    next();
}

module.exports ={postTrainer}