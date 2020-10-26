'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const convert = use('App/utils/converthourToMinutes');

const Schedule = use('App/Models/Schedule');
class ScheduleController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store(dataSchedule, class_id) {
    const utilConvert = new convert();

    const classesSchedule = dataSchedule.schedule.map((scheduleItem) => ({
      class_id,
      week_day: scheduleItem.week_day,
      from: parseInt(utilConvert.convertHourToMinutes(scheduleItem.from)),
      to: parseInt(utilConvert.convertHourToMinutes(scheduleItem.to))
    }));

    const Created = await classesSchedule.map((scheduleClasses) => ({
      scheduleCreated: Schedule.findOrCreate({ ...scheduleClasses })
    }))

    return Created;
  }

  /**
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

module.exports = ScheduleController
