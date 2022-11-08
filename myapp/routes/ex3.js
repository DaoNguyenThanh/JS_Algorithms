const express = require('express');
const router = express.Router();

/*impport controller*/
const ex3Controller = require('../controllers/ex3.controller');
/* GET users listing. */
router.get('/', ex3Controller.index );

module.exports = router;