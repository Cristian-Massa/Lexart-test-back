const {Router} = require('express');
const getUserById = require('../controllers/getUser.controller')
const registerUser = require('../controllers/registerUser.controller')
const loginUser = require('../controllers/loginUser.controller')
const usersRouter = Router()

// Ruta para el logueo de usuario
usersRouter.post('/login', loginUser);

// Ruta para el registro de usuario
usersRouter.post('/register', registerUser);

// Ruta para obtener la información del usuario según su ID
usersRouter.get('/get/:id', getUserById);

module.exports = usersRouter