const express = require('express')
const userModel = require('../src/user-model.js')
const app = express()
const port = 8080

app.listen(port, () => {
    console.log('Server Iniciated.')
})

app.get('/', async (req, res) => {
    try {
        const user = userModel.find({})
        res.status(200).send(user)
    } catch (error) {
        res.status(500)
        res.send('A Busca Falhou', error)
    }
})

// app.post('/', async (res, req))