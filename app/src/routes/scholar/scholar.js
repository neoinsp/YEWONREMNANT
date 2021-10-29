'use strict';

var express = require('express');
var router = express.Router();

const ctrl = require('./scholar.ctrl');

/* GET home page. */
/* intro */
router.get('/intro', ctrl.output.intro);

/* Apply */
router.get('/apply/doce/application', ctrl.output.apply);
// router.get('/apply/doce/cvdip', ctrl.output.apply);
// router.get('/apply/doce/mission', ctrl.output.apply);

module.exports = router;
