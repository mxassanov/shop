const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const { routes } = require('./src/routes')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://maga:maga@cluster0.8u3jh.mongodb.net/mevnshop?retryWrites=true&w=majority')

const app = express()

app.use(cors({
    credentials: true
}))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

routes.forEach(route => {
    app.use(`/api/${route}`, require(`./src/routes/${route}`))
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public/'))
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`server is running at ${PORT}`))

