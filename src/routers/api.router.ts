import { Router } from "express"
import productRouter from "../controllers/product.controller";

const api = Router()
    .use('/product', productRouter)

export default Router()
    .use('/api', api)
