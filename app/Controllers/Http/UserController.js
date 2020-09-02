'use strict'
const User = use('App/Models/User')

class UserController {
  async register({ request }) {
    const dataUser = await request.only([ 'username', 'password', 'email' ]);
    const user = await User.create(dataUser);

    return user;
  }
}

module.exports = UserController
