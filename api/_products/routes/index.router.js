const {Router} = require('express');
const getProductById = require('../controllers/getProductById.controller');
const getAllProducts = require('../controllers/getAllProducts.controller');
const seedProducts = require('../controllers/seedProducts.controller');
const deleteAllProducts = require('../controllers/deleteOneProduct.controller');
const createProduct = require('../controllers/createProduct.controller');
const deleteOneProduct = require('../controllers/deleteOneProduct.controller');
const authenticateToken = require('../../common/middlewares/authcheck');

const productsRouter = Router()


/**
 * @swagger
 * /v1/products/get/all:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *         description: Offset for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Limit for pagination
 *     responses:
 *       200:
 *         description: Returns all products
  *       500:
 *         description: Returns server error
 */
/**
 * @swagger
 * /v1/products/get/one/{id}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get a single product by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Returns the product with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                   format: float
 *                 stock:
 *                   type: integer
 *                 model:
 *                   type: string
 *                 mark:
 *                   type: string
 * 
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /v1/products/create/seed:
 *   post:
 *     tags:
 *       - Products
 *     summary: Create 50 products to test
 *     responses:
 *       200:
 *         description: Products created 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       500:
 *         description: Return error fron server
 */
/**
 * @swagger
 * /v1/products/create:
 *   post:
 *     tags:
 *       - Products
 *     summary: Create a new product
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *               stock:
 *                 type: integer
 *                 description: Quantity of the product in stock
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Price of the product
 *               model:
 *                 type: string
 *                 description: Model of the product
 *               mark:
 *                 type: string
 *                 description: Brand or mark of the product
 *             required:
 *               - name
 *               - stock
 *               - price
 *               - model
 *               - mark
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID of the created product
 *                 name:
 *                   type: string
 *                 stock:
 *                   type: integer
 *                 price:
 *                   type: number
 *                   format: float
 *                 model:
 *                   type: string
 *                 mark:
 *                   type: string
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /v1/products/delete/all:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete all products
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All products have been deleted successfully
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /v1/products/delete/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete a specific product by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */


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