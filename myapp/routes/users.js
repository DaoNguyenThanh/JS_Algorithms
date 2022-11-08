const express = require('express');
const router = express.Router();

/*impport controller*/
const userController = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', userController.index );

module.exports = router;
