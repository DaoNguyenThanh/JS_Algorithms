const express = require('express');
const router = express.Router();

/*impport controller*/
const ex2Controller = require('../controllers/ex2.controller');
/* GET users listing. */
router.get('/', ex2Controller.index );

module.exports = router;