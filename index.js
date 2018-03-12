const auth = require('basic-auth')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')

const env = require('./env')

const app = express()

app.use(helmet())
app.use(morgan('combined'))

app.use((req, res, next) => {
  const credentials = auth(req)
  if (credentials === undefined || credentials.name !== process.env.USERNAME || credentials.pass !== process.env.PASSWORD) {
    res.statusCode = 401
    res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"')
    res.end('Unauthorized')
  } else {
    next()
  }
})

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})
