var express = require('express');
var profesor = require('./profesor');
var alumno = require('./alumno');

var router = express.Router();

router.use('/profesors', profesor);
router.use('/alumno', alumno);

module.exports = router;