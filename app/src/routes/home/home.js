'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./home.ctrl');

/* GET home page. */
router.get('/', ctrl.output.home);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router;
