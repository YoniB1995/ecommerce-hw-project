require('dotenv').config();
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
        await mongoose.connect(MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
}
connectDB().then(()=>{
    console.log('MongoDB Atlas Connected');

}).catch((err)=>{
    console.log(`Error Message - ${err.message}`)
})

module.exports = mongoose.connection;

