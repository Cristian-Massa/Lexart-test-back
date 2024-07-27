require('dotenv').config();
const express = require("express");
const router = require('./common/routes/index.router');
const cookies = require('cookie-parser')
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cookies())
app.use(express.json({ limit: '5mb'}))
app.get("/", (req, res) => res.send("Welcome to my test integration express server in vercel serverless function"));
app.use('/v1', router)
app.listen(PORT, () => console.log("Server ready on port " + PORT));

module.exports = app;