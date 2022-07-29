var express = require('express');
const {getStudentById, postStudent, mputStudent, getStudentlist, deleteStudent} = require('../controllers/student');
var router = express.Router();

router.get('/:id', getStudentById);
router.post('/post', postStudent);
router.put('/put/:id', mputStudent);
router.delete('/delete/:id', deleteStudent)
//router.get('/list', getStudentlist);

module.exports = router;