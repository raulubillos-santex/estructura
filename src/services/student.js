const {v4} = require('uuid');
const {studentList, selectStudentByPK, addStudent, updateStudent, deleteStudent} = require('../providers/student');

const createStudent = async (body) => {
    const student = {
        Id: v4(),
        CompleteName: body.CompleteName,
        Adress: body.Adress,
        OverallRating: body.OverallRating,
        Active: body.Active
    };

    const idCreated = await addStudent(student);

    if(!idCreated) {
        throw new Error('STUDENT-NOT-CREATED');
    }

    return idCreated;
}

const obtainStudent = async (idStudent) => {
    const student = await selectStudentByPK(idStudent);

    if(student.error){
        throw new Error('GENERAL-ERROR');
    }

    if(!student){
        throw new Error('STUDENT-NOT-FOUND');
    }

    return student;
}

const putstudent = async (id, body) => {
    const updatedStudent = await updateStudent(id, body);

    return updatedStudent;
}

const destroyStudent = async (id) => {
    const deletedStudent = await deleteStudent(id);

    return deletedStudent;
}







// const obtainStudentList = async () => {
//     const list = await studentList();
//     if (!list) {
//         throw new Error('STUDENTS-NOT-FOUND')
//     }
//     if(list.error){
//         throw new Error('GENERAL-ERROR');
//     }
//     console.log("service")
// }

module.exports = {
    obtainStudent,
    createStudent,
    putstudent,
    destroyStudent,
    //obtainStudentList
}