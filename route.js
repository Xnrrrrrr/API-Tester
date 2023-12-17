const express = require('express');
const router = express.Router();

const {
    createName
} = require('./controller.js');

router.route('/').post(createName);

module.exports = router;