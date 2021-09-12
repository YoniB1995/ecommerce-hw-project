require('dotenv').config();
// const connectDB= require('./db');



const importData = async () => {
    try{
    
    // await watch.deleteMany({});
    // await watch.insertMany(watchesData);

    // await blazer.deleteMany({});
    // await blazer.insertMany(blazersData);

    // await bag.deleteMany({});
    // await bag.insertMany(bagsData);


    // console.log("data import success")

    // process.exit();
    }
    catch(error){
        console.error("Error with data import")
        process.exit(1);
    }
}

// module.exports = importData();