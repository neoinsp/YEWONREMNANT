'use strict';

// const User = require('../../models/User');

const output = {
  topNav: (req, res) => {
    res.render('comp/top-nav');
  },
  topNavLogin: (req, res) => {
    res.render('comp/top-nav-login');
  },
  topNavSub: (req, res) => {
    res.render('comp/top-nav-sub');
  },
  basicBox: (req, res) => {
    res.render('comp/basic-box');
  },
  basicBoxApply: (req, res) => {
    res.render('comp/basic-box-apply');
  },
  basicBoxTitle: (req, res) => {
    res.render('comp/basic-box-title');
  },
};

// const process = {
//   login: async (req, res) => {
//     const user = new User(req.body);
//     const response = await user.login();
//     return res.json(response);
//   },
//   registration: async (req, res) => {
//     const user = new User(req.body);
//     const response = await user.registration();
//     return res.json(response);
//   },
// };

module.exports = {
  output,
  // process,
};
