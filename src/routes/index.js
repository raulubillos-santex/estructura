var express = require('express');
var profesor = require('./profesor');
var trainer = require('./trainer');

var router = express.Router();

router.use('/profesors', profesor);
router.use('/trainers', trainer);

module.exports = router;