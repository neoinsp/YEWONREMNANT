'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./home.ctrl');

/* GET home page. */
router.get('/', ctrl.home);
router.get('/login', ctrl.login);

module.exports = router;
