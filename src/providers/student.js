const {Student} = require('../models')
const {Op} = require('sequelize')

// POST
const addStudent = async(student) => {
   const studentCreated = await Student.create({...student}, {isNewRecord: true});
   return studentCreated.get();
}

// GET
// const studentList = async(active) => {
//     const list = await Student.findAll({
//         where:{
//             Active: active
//         }
//     });
//     console.log("provider")
//     return list;
// }

const selectStudentByPK = async (id) => {
    try {
        const student = await Student.findOne({
            where:{
                Id: id,
                Active: true
            }
        }, {attributes: ['CompleteName', 'OverallRating']});
        return student.get();
    }catch(err){
        return {
            error: true
        };
    }
}

// PUT
const updateStudent = async(id, body) => {
    try {
        const student = await Student.findOne({
            where: {
                Id: id
            }
        });
        await student.update(body);

        const uStudent = await student.save();
        
        return uStudent;
        
    } catch (err) {
        return{
            error: true
        };
    }
}

// DELETE

const deleteStudent = async(id) => {

    const deleted = await Student.destroy({
        where: {
            Id: id
        }
    });

    return deleted
}

module.exports = {
    //studentList,
    deleteStudent,
    addStudent,
    selectStudentByPK,
    updateStudent
}