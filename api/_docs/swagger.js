const swaggerui = require("swagger-ui-express");
const swaggerJS = require("swagger-jsdoc");

const path = require("path");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pruebas de rutas para prueba tecnica",
      version: "1.0.0",
      description: "Implementacion de testeo de rutas con swagger.",
    },
    // servers: [
    //   {
    //     url: `http://localhost:3000`,
    //   },
    // ],
  },
  apis: [
    path.join(__dirname, "..", "_users", "routes", "index.router.js"),
    path.join(__dirname, "..", "_products", "routes", "index.router.js"),
  ],
};

const swaggerSpec = swaggerJS(swaggerOptions);

module.exports = {
  swaggerSpec,
  swaggerui,
  swaggerOptions,
};
