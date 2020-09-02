'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

// const convertHourToMinutes = use('App/Utils/ConvertHourToMinutes');

const Schedule = use('App/Models/Schedule');
class ScheduleController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store(dataSchedule, classes_id) {
    // const classesSchedule = dataSchedule.map((scheduleItem) => ({
    //   week_day: scheduleItem.week_day,
    //   from: convertHourToMinutes(scheduleItem.from),
    //   to: convertHourToMinutes(scheduleItem.to),
    // }));

    console.log(dataSchedule);

    // const scheduleCreated = await Schedule.create(classes_id, {...classesSchedule });

    // return scheduleCreated;
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ScheduleController
