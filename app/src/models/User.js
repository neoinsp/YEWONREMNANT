'use strict';

const UserStorage = require('../models/UserStorage');

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const {id,pw} = await UserStorage.getUserInfo(client.id);
  
    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: '비밀번호가 틀렸습니다.' };
    }
    return { success: false, msg: '존재하지 않는 아이디입니다.' };
  }
  
  async registration() {
    try {
      const client = this.body;    
      return await UserStorage.save(client);  
    } catch (error) {
      return {success:false, msg:error}
    }
    
  }
}

module.exports = User;
