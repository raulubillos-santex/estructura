var express = require('express');
var router = express.Router();
const movies = require('./movies');

//Routes
router.get('/', (req, res) => {
    res.send("HOME")
})

router.use(movies);

module.exports = router;