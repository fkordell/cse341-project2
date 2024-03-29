const express = require('express');

const router = express.Router();

router.use('/events', require('./events'));
router.use('/user', require('./user'))
router.use('/', require('./swagger'));

module.exports = router;