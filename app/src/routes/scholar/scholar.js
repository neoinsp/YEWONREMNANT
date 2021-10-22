'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./scholar.ctrl');

/* GET home page. */
/* intro */
router.get('/intro', ctrl.output.intro);

/* Apply */
router.get('/apply', ctrl.output.apply);
// router.post('/scholar', ctrl.process.login);

module.exports = router;
