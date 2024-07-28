require('dotenv').config();
const express = require("express");
const router = require('./common/routes/index.router');
const cookies = require('cookie-parser')
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const app = express();



// middlewares
app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza con el dominio de tu frontend
    credentials: true // Permite el envío de cookies y otras credenciales
}))
app.use(cookies())
app.use(express.json({ limit: '5mb'}))

// rutas
app.get("/", (req, res) => res.send("Welcome to my test integration express server in vercel serverless function"));
app.use('/v1', router)


module.exports = app;