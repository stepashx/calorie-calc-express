const express = require('express')
const router = express.Router()

const products = [
    {
        name: "apple",
    },
    {
        name: "pineapple",
    },
    {
        name: "orange",
    }
]

router.get('/', (req, res) => {
    res.send(products)
})

module.exports = {
    router
}