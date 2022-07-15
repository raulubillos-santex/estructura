var express = require('express');
var profesor = require('./profesor');

var router = express.Router();

router.use('/profesors', profesor);

module.exports = router;