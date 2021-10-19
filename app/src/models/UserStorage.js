'use strict';

class UserStorage {
  static #users = {
    id: ['yglee2601@gmail.com', 'bhlee', 'swseo'],
    pw: ['asdf', '34', '56'],
    name: ['용걸', '병호', '상우'],
  };

  static getUsers(...fields) {
    const users = this.s;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(clientInro) {
    const user = this.#users;
    this.#users.id.push(clientInro.id);
    this.#users.pw.push(clientInro.pw);
    this.#users.name.push(clientInro.name);
    return {success :true};
  }
}

module.exports = UserStorage;
