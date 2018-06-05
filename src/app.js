const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

let url = 'mongodb://bruny:9074218b@ds237700.mlab.com:37700/express-api-democar'
mongoose.connect(url)

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/cars', require('./routes/carsRoute'))

module.exports = app