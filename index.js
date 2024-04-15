const express = require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT;
app.get('/', (req, res) => {
res.send('Hello world!')
})
app.get('/login', (req, res) => {
res.send('<h1>please login details</h1>')
})
app.listen(port,()=>{
  console.log("file running in the background")
})
