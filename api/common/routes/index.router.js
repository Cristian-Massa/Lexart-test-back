const {Router} = require('express');
const {
    swaggerSpec,
    swaggerui,
    swaggerOptions} = require('../../_docs/swagger')
const userRouter = require('../../_users/routes/index.router')
const productsRouter = require('../../_products/routes/index.router');
const router = Router()

router.use('/users', userRouter)
router.use('/products', productsRouter)
router.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec))

module.exports = router