'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./comp.ctrl');

/* Comp Test Router */

/* Top-Nav */
router.get('/top-nav', ctrl.output.topNav);
// router.post('/login', ctrl.process.login);
router.get('/top-nav-login', ctrl.output.topNavLogin);
// router.post('/login', ctrl.process.login);
router.get('/top-nav-sub', ctrl.output.topNavSub);
// router.post('/login', ctrl.process.login);

/* Basic-Box */
router.get('/basic-box', ctrl.output.basicBox);
router.get('/basic-box-apply', ctrl.output.basicBoxApply);
router.get('/basic-box-title', ctrl.output.basicBoxTitle);

module.exports = router;
