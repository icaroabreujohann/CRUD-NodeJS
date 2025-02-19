const dotenv = require('dotenv')
const connectDb = require('./src/connectdb.js')

dotenv.config()
connectDb()

require('./modules/api.js')