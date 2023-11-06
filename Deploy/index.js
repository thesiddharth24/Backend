require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
console.log(process.env.PORT);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter' , (req,res) => {
    res.send('Siddharth Gupta')
})

app.get('/login', (req,res) => {
     res.send('<h1>its sidd here</h1>')
})
app.listen(port , () => {
  console.log(`Example app listening on port ${port}`)
})