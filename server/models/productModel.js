const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productID:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    image: {
        type: String,
        required:true
    }
    ,rating: {
        rate:{
            type:Number,
        required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
})

const product = mongoose.model('product',productSchema);

module.exports = product;