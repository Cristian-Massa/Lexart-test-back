const {Router} = require('express');
const swaggerui = require('swagger-ui-express')
const {swaggerSpec} = require('../../_docs/swagger')
const userRouter = require('../../_users/routes/index.router')
const productsRouter = require('../../_products/routes/index.router');
const router = Router()

router.use('/users', userRouter)
router.use('/products', productsRouter)
router.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerSpec))

router.get('/docs-json', (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec)
})

module.exports = router