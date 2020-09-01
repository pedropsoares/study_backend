'use strict'
const User = use('App/Models/User')

const ClassController = use('App/Controllers/Http/ClassController')

class UserController {
  async register({ request }) {
    const dataUser = await request.only([ 'username', 'password', 'email', 'whatsapp' ]);
    // const dataClass = await request.only(['subject', 'cost'])
    
    const user = await User.create(dataUser);

    console.log(user)

    // const classCtr = new ClassController()
    // await classCtr.store(dataClass)

    return user;
  }
}

module.exports = UserController
