import { Router } from 'express'
import * as productsCtrl from '../controllers/products.controller'

const router = Router()

router.post('/', productsCtrl.createProducts)

router.get('/', productsCtrl.getProducts)

router.get('/:id', productsCtrl.getProductById)

router.put('/:id', productsCtrl.updateProductById)

router.delete('/:id', productsCtrl.deleteProductById)

export default router
