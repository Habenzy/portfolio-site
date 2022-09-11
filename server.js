require('dotenv').config()
const port = process.env.PORT || 5500

const express = require('express')
const app = express()

app.use(express.static('client/build'))

app.get("*", (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(port, () => console.log(`Listening on port ${port}`))