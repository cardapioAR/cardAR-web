require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const restauranteRouter = require('./routes/restaurantes')
const app = express()

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME

mongoose.connect(`mongodb+srv://${db_user}:${db_password}@pi-cluster0.clx3l.mongodb.net/${db_name}?retryWrites=true&w=majority`)

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/views'));
app.use(restauranteRouter)

app.listen(process.env.PORT || 5000)