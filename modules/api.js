const express = require('express')
const UserModel = require('../src/user-model.js')
const app = express()
const port = 8080

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send('The search failed', error)
    }
})

app.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send('The search failed', error)
    }    
})

app.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send('The search failed', error)
    }
})

app.post('/', async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        res.status(201).json(user)
        console.log('User created:', req.body)
    } catch (error) {
        res.status(500).send('The operation failed', error)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id)
        res.status(204).send(`User ${user.firstName} ${user.lastName} has been deleted.`)
    } catch (error) {
        res.status(500).send('The operation failed', error)
    }
})

app.listen(port, () => {
    console.log('Server Iniciated.')
})