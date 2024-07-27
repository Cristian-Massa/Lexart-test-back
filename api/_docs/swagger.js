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
    servers: [
      {
        url: `https://lexart-test-back.vercel.app/v1`, 
        description: "My API Documentation",
      },      
      {
        url: `http://localhost:3000`, 
        description: "My API Documentation",
      },
    ],
  },
  customCss: `https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css`,
  apis: [
    path.join(__dirname, "..", "_users", "routes", "index.router.js"),
    path.join(__dirname, "..", "_products", "routes", "index.router.js"),
  ],
};

const swaggerSpec = swaggerJS(swaggerOptions);

module.exports = {
  swaggerSpec,
};
