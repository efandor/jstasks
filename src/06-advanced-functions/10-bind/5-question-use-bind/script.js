'use strict'

function askPassword(ok, fail, password = '') {
  if (password == "rockstar") {
    ok();
  } else {
    fail();
  }
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); //Вася failed to log in
askPassword(user.loginOk.bind(user), user.loginFail.bind(user), 'rockstar'); //Вася logged in
