const express = require('express')
const helmet = require('helmet')
const welcomeRouter = require("./welcome/welcome-router")
const carsRouter = require('./cars/cars-router')

const server = express()
const PORT = process.env.PORT || 5000;

server.use(helmet())
server.use(welcomeRouter)
server.use(carsRouter)


server.listen(PORT, () => {

    console.log(`\n== API running on port ${PORT} ==\n`);
  });
  