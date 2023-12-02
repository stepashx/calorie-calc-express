import express, { Request, Response } from 'express'
import router from './routers/api.router'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
    res.json({
        "status_code": 200,
        "message": "Welcome to calorie calculator!"
    })
})

app.listen(port, () => {
    console.log("Calorie calculator is working")
})
