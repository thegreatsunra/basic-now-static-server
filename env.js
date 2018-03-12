const dotenv = require('dotenv')

dotenv.config()

const env = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: process.env.PORT || 3000
}

module.exports = env
