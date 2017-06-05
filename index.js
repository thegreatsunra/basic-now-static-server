const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/updateCerts', (req, res) => {
  fs.writeFile('./cert/certificate.pem.cert', `${req.body.certificate}`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('updated certificate!')
  })
  fs.writeFile('./cert/private.pem.key', `${req.body.privateKey}`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('updated private key!')
  })
  fs.writeFile('./cert/public.pem.key', `${req.body.publicKey}`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('updated public key!')
  })
  fs.writeFile('./cert/root-CA.crt', `${req.body.rootCA}`, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('updated root-CA!')
  })
  res.send('certificate updated with "' + req.body.certificate + '".')
})

app.listen(3000, () => {
  console.log('Express listening on port 3000')
})
