require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))

app.use(express.json())

const registerRouter = require('./routes/register')
app.use('/user', registerRouter)

app.listen(3000, () => console.log('server started'))