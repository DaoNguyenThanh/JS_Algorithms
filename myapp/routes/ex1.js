const express = require('express');
const router = express.Router();

/*impport controller*/
const ex1Controller = require('../controllers/ex1.controller');
/* GET users listing. */
router.get('/', ex1Controller.index );

module.exports = router;
