'use strict';

const User = require('../../models/User');

const output = {
  login: (req, res) => {
    res.render('auth/login');
  },
  registration: (req, res) => {
    res.render('auth/registration');
  },
  registrationRt: (req, res) => {
    res.render('auth/registration-rt');
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();
    return res.json(response);
  },
  registration: async (req, res) => {
    const user = new User(req.body);
    const response = await user.registration();
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
