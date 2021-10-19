'use strict';

const output = {
  home: (req, res) => {
    res.render('home/index');
  },
  login: (req, res) => {
    res.render('home/login');
  },
};

const users = {
  id: ['yglee2601@gmail.com', 'bhlee', 'swseo'],
  pw: ['asdf', '34', '56'],
};

const process = {
  login: (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      mag: '로그인에 실패하셨습니다.',
    });
  },
};

module.exports = {
  output,
  process,
};
