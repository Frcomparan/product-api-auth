import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller'
import { verifyToken } from '../middlewares'

const router = Router()

router.post('/', verifyToken, productsCtrl.createProducts)

router.get('/', productsCtrl.getProducts)

router.get('/:id', productsCtrl.getProductById)

router.put('/:id', verifyToken, productsCtrl.updateProductById)

router.delete('/:id', verifyToken, productsCtrl.deleteProductById)

export default router
