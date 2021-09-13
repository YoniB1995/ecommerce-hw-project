require('dotenv').config();
const connectDB= require('./db');

const storeData = require('./data/store')
const storeModel = require('./models/productModel')


const importData = async () => {
    try{
    
    await storeModel.deleteMany({});
    await storeModel.insertMany(storeData);

  

    console.log("data import success")

    process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

module.exports = importData();