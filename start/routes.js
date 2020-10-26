'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/user/register', 'UserController.register');
Route.put('/user', 'UserController.update').middleware('auth');

Route.post('/user/login', 'AuthController.authenticate');


Route.get('/classes', 'ClassController.index');

Route.post('/classes', 'ClassController.store').middleware('auth');