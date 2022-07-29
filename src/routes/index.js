var express = require('express');
var profesor = require('./profesor');
var student = require('./student');

var router = express.Router();

router.use('/profesors', profesor);
router.use('/students', student);


module.exports = router;