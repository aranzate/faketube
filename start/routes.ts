/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', 'UsersController.home').as('home')

Route.get('/login', 'SessionsController.create').as('sessions.create')
Route.post('/login', 'SessionsController.store').as('sessions.store')
Route.get('/logout', 'SessionsController.delete').as('sessions.delete')

Route.get('/register', 'UsersController.create').as('users.create')
Route.post('/register', 'UsersController.store').as('users.store')
Route.get('/users/edit', 'UsersController.edit').as('users.edit')
Route.post('/users/edit', 'UsersController.update').as('users.update')

Route.get('/videos', 'VideosController.list').as('videos.list')


Route.group(() =>{
  Route.get('/', 'DocumentsController.index').as('index')
  Route.get('/:id', 'DocumentsController.show').as('show')
  Route.post('/', 'DocumentsController.store').as('store')
})
  .prefix('/documents')
  .middleware('auth')
  .as('documents')
