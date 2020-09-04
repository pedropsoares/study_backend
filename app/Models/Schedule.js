'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
  class() {
    return this.belongsTo("App/Models/Class")
  }
}

module.exports = Schedule
