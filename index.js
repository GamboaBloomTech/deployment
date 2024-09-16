const express = require('express')
require('dotenv').config() // to load env variables

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("Hi, good to see you")
})
