'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('avatar');
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('whatsapp', 60);
      table.string('bio', 254);
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
