'use strict'
const User = use('App/Models/User')

class UserController {
  async register({ request }) {
    const dataUser = await request.only([ 'username', 'password', 'email' ]);
    const user = await User.create(dataUser);

    return user;
  }

  async update({ request, auth }) {
    const dataUser = await request.only(['username', 'password', 'email', 'whatsapp', 'bio', 'avatar' ]);
    const user = await User.find(auth.user.id);

    user.merge(dataUser);
    await user.save();

    return user;

  }
}

module.exports = UserController
