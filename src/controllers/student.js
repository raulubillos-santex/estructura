const {obtainStudent, createStudent, putstudent, obtainStudentList, destroyStudent} = require('../services/student');
const {errorCodes} = require('../utils/constant')

// GET
const getStudentById = async (req,res,next) => {
    const id = req.params.id;

    try{
        const student = await obtainStudent(id);
        res.status(200).send(student);
    }catch(err){
        res.status(errorCodes[err.message]).send(err.message);
    }

    next();
}
const postStudent = async (req,res,next) => {
    try {
        const id = await createStudent(req.body);
        res.status(201).send({
            id: id
        });
        next();
    }catch(err){
        res.status(422).send(err.message);
        next();
    }
    next();
}

const mputStudent = async (req, res, next) => {
    const updateInfo = await putstudent(req.params.id, req.body);
    if (updateInfo) {
        res.status(200).send(updateInfo);
    } else {
        res.status(200).send("NOT_UPDATED");
    }
    next();
}

const deleteStudent = async (req, res, next) => {
    const deletedStudent = await destroyStudent(req.params.id);
    if (deletedStudent) {
        res.status(200).send("DELETED");
    } else {
        res.status(200).send("NOT_DELETED");
    }
}


// const getStudentlist = async (req,res,next) => {
//     try{
//         const student = await obtainStudentList();
//         res.status(200).send(student);
//     }catch(err){
//         res.status(errorCodes[err.message]).send(err.message);
//     }
//     console.log("service")
//     next();
// }


module.exports= { 
    getStudentById,
    postStudent,
    mputStudent,
    deleteStudent,
    //getStudentlist
}