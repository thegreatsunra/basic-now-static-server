const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT || 3000
}
