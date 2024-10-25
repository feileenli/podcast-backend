const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('this is the use router')
})

router.get('/101', (req, res) => {
    res.send('this is user 101 route')
})

module.exports = router; 