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

Route.get('/login', 'SessionsController.create').as('sessions/create')
Route.post('/login', 'SessionsController.store').as('sessions/store')
Route.get('/logout', 'SessionsController.delete').as('sessions/delete')

Route.get('/register', 'UsersController.create').as('users/create')
Route.post('/register', 'UsersController.store').as('users/store')
Route.get('/users/edit', 'UsersController.edit').as('users/edit').middleware('auth')
Route.put('/users/edit', 'UsersController.update').as('users/update')

Route.get('/videos', 'VideosController.list').as('videos/list')
Route.get('/history', 'VideosController.history').as('videos/history')
Route.get('/latest', 'VideosController.latest').as('videos/latest')
Route.post('/videos/video/:id', 'VideosController.addToHistory').as('videos/addToHistory')
Route.get('/videos/video/:id', 'VideosController.show').as('videos/show')
Route.get('/videos/upload', 'VideosController.create').as('videos/create').middleware('auth')
Route.post('/videos/upload', 'VideosController.store').as('videos/store')
Route.get('/videos/edit/:id', 'VideosController.edit').as('videos/edit').middleware('auth')
Route.put('/videos/video/:id', 'VideosController.update').as('videos/update')
Route.delete('/videos/video/:id', 'VideosController.destroy').as('videos/delete')
