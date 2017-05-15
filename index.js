const auth = require('basic-auth')
const express = require('express')
const app = express()

app.use((req, res, next) => {
    next()
})
app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})
