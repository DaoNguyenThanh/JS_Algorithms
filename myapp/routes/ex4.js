const express = require('express');
const router = express.Router();

/*impport controller*/
const ex4Controller = require('../controllers/ex4.controller');
/* GET users listing. */
router.get('/', ex4Controller.index );

module.exports = router;