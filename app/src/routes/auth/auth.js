'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./auth.ctrl');

/* GET home page. */
/* Login */
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

/* Register */
router.get('/registration', ctrl.output.registration);
router.post('/registration', ctrl.process.registration);

module.exports = router;
