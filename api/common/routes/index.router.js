const {Router} = require('express');
const userRouter = require('../../_users/routes/index.router')
const productsRouter = require('../../_products/routes/index.router')
const router = Router()

router.use('/users', userRouter)
router.use('/products', productsRouter)

module.exports = router