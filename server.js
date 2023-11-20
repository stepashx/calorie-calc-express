const express = require('express')
const productRouter = require('./src/routers/product')

const app = express()
const port = process.env.PORT || 3000

app.use('/product', productRouter.router)

app.get('/', (req, res) => {
    res.json({
        "status_code": 200,
        "message": "Welcome to calorie calculator!"
    })
})

app.listen(port, () => {
    console.log("Calorie calculator is working")
})
