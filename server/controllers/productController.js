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

const getJewelryProducts = async (req,res) =>{
    try{
        const productsCategory = await product.find({category:"jewelery"});
        res.json(productsCategory);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}
const getMenProducts = async (req,res) =>{
    try{
        const productsCategory = await product.find({category:"men's clothing"});
        res.json(productsCategory);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}
const getElectronicsProducts = async (req,res) =>{
    try{
        const productsCategory = await product.find({category:"electronics"});
        res.json(productsCategory);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getWomenProducts = async (req,res) =>{
    try{
        const productsCategory = await product.find({category:"women's clothing"});
        res.json(productsCategory);
    } catch(error){
        console.log(error);
        res.status(500).json({message:"Server Error"});
    }
}

const getFunction = {getAllProducts,
    getProductByID,
    getMenProducts,
    getElectronicsProducts,
    getJewelryProducts,
    getWomenProducts}

module.exports = getFunction;
