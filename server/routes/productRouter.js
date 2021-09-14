const express= require('express');
const router = express.Router();
const getFunction = require('../controllers/productController')


router.get('/',getFunction.getAllProducts)
router.get('/:id',getFunction.getProductByID)
router.get('/category/men',getFunction.getMenProducts)
router.get('/category/women',getFunction.getWomenProducts)
router.get('/category/electronics',getFunction.getElectronicsProducts)
router.get('/category/jewelry',getFunction.getJewelryProducts)




module.exports = router;