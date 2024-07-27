const {Router} = require('express');
const getProductById = require('../controllers/getProductById.controller');
const getAllProducts = require('../controllers/getAllProducts.controller');
const seedProducts = require('../controllers/seedProducts.controller');
const deleteAllProducts = require('../controllers/deleteOneProduct.controller');
const createProduct = require('../controllers/createProduct.controller');
const deleteOneProduct = require('../controllers/deleteOneProduct.controller');
const authenticateToken = require('../../common/middlewares/authcheck');

const productsRouter = Router()

// Ruta para obtener un producto por ID
productsRouter.get('/get/one/:id', authenticateToken, getProductById);

// Ruta para obtener productos con paginación
productsRouter.get('/get/all?', authenticateToken, getAllProducts);

// Ruta para crear 50 productos de ejemplo
productsRouter.post('/create/seed', authenticateToken, seedProducts);

// Ruta para crear productos
productsRouter.post('/create/one', authenticateToken, createProduct);


// Ruta para eliminar todos los productos
productsRouter.delete('/delete/all', authenticateToken, deleteAllProducts);

// Ruta para eliminar todos los productos
productsRouter.delete('/delete/one/:id', authenticateToken, deleteOneProduct);

module.exports = productsRouter