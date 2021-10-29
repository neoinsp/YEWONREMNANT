'use strict';

const output = {
  home: (req, res) => {
    res.render('index/index');
  },
  indexLogin: (req, res) => {
    res.render('index/index-login');
  },
};

module.exports = {
  output,
};
