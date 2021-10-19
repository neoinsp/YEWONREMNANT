'use strict';

const UserStorage = require('../models/UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUserInfo(body.id);

    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: '비밀번호가 틀렸습니다.' };
    }
    return { success: false, msg: '존재하지 않는 아이디입니다.' };
  }
  
  registration() {
    
  }
}

module.exports = User;
