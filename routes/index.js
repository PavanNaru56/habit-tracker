const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/',homeController.home);
router.use('/users',require('./weekly'));
router.use('/habit',require('./habit'));


module.exports = router;