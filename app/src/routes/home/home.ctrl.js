'use strict';

const output = {
  home: (req, res) => {
    res.render('index/index');
  },
};

module.exports = {
  output,
};
