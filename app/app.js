// 모듈
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// 라우팅
const home = require('./src/routes/home/home');
const auth = require('./src/routes/auth/auth');

// 앱 세팅
app.set('view engine', 'ejs'); //'ejs'탬플릿을 엔진으로 한다.
app.set('views', './app/src/views'); //폴더, 폴더경로 지정
app.use(express.static(`${__dirname}/src/public`)); // 스테틱 데이터 서비스 경로 제공
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글 공백등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터
app.use('/', home);
app.use('/auth', auth);

module.exports = app;

// const
