const {Router} = require('express');
const getProductById = require('../controllers/getProductById.controller');
const getAllProducts = require('../controllers/getAllProducts.controller');
const seedProducts = require('../controllers/seedProducts.controller');
const deleteAllProducts = require('../controllers/deleteAllProducts.controller');

const productsRouter = Router()

// Ruta para obtener un producto por ID
productsRouter.get('/:id', getProductById);

// Ruta para obtener productos con paginación
productsRouter.get('/', getAllProducts);

// Ruta para crear 50 productos de ejemplo
productsRouter.post('/seed', seedProducts);

// Ruta para eliminar todos los productos
productsRouter.delete('/', deleteAllProducts);

module.exports = productsRouter