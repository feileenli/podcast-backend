const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('this is the product route')
})

router.get('/101', (req, res) => {
    res.send('this is product 101 route')
})

module.exports = router; 