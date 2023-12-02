import { Request, Response, Router } from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../services/product.service";

const router = Router()

router.get('/', async (req, res) => {
    const products = await getProducts(req.query)

    res.send(products)
})

router.post('/', async (req: Request, res: Response) => {
    const product = await createProduct(req.body)

    res.send(product)
})

router.put('/:id', async (req: Request, res: Response) => {
    const product = await updateProduct(+req.params.id, req.body)

    res.send(product)
})

router.delete('/:id', async (req: Request, res: Response) => {
    const product = await deleteProduct(+req.params.id)

    res.send(product)
})

export default router