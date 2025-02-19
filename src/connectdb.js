const mongoose = require('mongoose')
const connectDb =  async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('The Database has been connected sucessfully')
    } catch (error) {
        console.log('The connection failed', error)
    }
}

module.exports = connectDb