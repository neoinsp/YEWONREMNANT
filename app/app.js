// 모듈
const express = require('express');
const path = require('path');
const app = express();

// 라우팅
const home = require('./src/routes/home/home');

// 앱 세팅
app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.set('views', './app/src/views'); //폴더, 폴더경로 지정

// 라우터
app.use('/', home);

module.exports = app;

// const
