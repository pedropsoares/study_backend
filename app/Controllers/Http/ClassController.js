'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ScheduleController = use('App/Controllers/Http/ScheduleController')

const Class = use('App/Models/Class')

class ClassController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {
    const classes = await Class.query()
      .with('user')
      .with('schedules')
      .fetch();

    return classes;
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, auth }) {
    const dataClass = await request.only(['subject', 'cost'])
    const dataSchedule = await request.only(['schedule'])

    const classCreated = await Class.create({ user_id: auth.user.id, ...dataClass })

    const scheduleCtr = new ScheduleController()
    await scheduleCtr.store(dataSchedule, classCreated.id)

    return classCreated;
  }

  /**
   * Display a single class.
   * GET classes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = ClassController
