const product = require('../models/productModel')


const getAllProducts = async (req,res) =>{
    try{
        const products = await product.find({});

        res.json(products);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getProductByID = async (req,res) =>{
    try{
        const productID = await product.findById(req.params.id);

        res.json(productID);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}


module.exports = {
    getAllProducts,
    getProductByID,
    


}