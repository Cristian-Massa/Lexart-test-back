const {Router} = require('express');
const getUserById = require('../controllers/getUser.controller')
const registerUser = require('../controllers/registerUser.controller')
const loginUser = require('../controllers/loginUser.controller')
const usersRouter = Router()

/**
 * @swagger
 * /v1/users/register:
 *   post:
 *     tags:
 *       - Users
 *     summary: Create a user and get a token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created, token returned and saved as cookie aviable for 1 day
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

// Ruta para el logueo de usuario
usersRouter.post('/login', loginUser);

// Ruta para el registro de usuario
usersRouter.post('/register', registerUser);

// Ruta para obtener la información del usuario según su ID
usersRouter.get('/get/:id', getUserById);

module.exports = usersRouter