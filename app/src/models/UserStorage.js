'use strict';

const fs = require('fs').promises;

class UserStorage {
  
  static #getUserInfo(data,id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const usersKeys = Object.keys(users);
      const userInfo = usersKeys.reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});
      return userInfo;
  }

  static #getUsers(data,fields) {
    const users = JSON.parse(data);
        const newUsers = fields.reduce((newUsers, field) => {
          if (users.hasOwnProperty(field)) {
            newUsers[field] = users[field];
          }
          return newUsers;
        }, {});
        return newUsers;
  }

  static getUsers(...fields) {
    return fs.readFile('./app/src/database/users.json')
    .then((data)=>{
      return this.#getUsers(data,fields);
    })
    .catch(console.error); 
  }

  static getUserInfo(id) {
    return fs.readFile('./app/src/database/users.json')
    .then((data)=>{
      return this.#getUserInfo(data,id);
    })
    .catch(console.error);
  }

  static async save(clientInro) {
    const users = await this.getUsers('id','pw','name');
    if(users.id.includes(clientInro.id)){
      throw '이미 존재하는 아이디입니다';
    }
    users.id.push(clientInro.id);
      users.pw.push(clientInro.pw);
      users.name.push(clientInro.name);
      fs.writeFile('./app/src/database/users.json',JSON.stringify(users));
      return {success:true};
    
  }
}

module.exports = UserStorage;
