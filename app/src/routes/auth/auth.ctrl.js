'use strict';

const User = require('../../models/User');

const output = {
  login: (req, res) => {
    res.render('auth/login');
  },
  registration: (req, res) => {
    res.render('auth/registration');
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  registration: (req, res) => {
    const user = new User(req.body);
    const response = user.registration();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
