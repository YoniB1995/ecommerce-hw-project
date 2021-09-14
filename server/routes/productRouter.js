const express= require('express');
const router = express.Router();
const {getAllProducts, getProductByID } = require('../controllers/productController')


router.get('/',getAllProducts)
router.get('/:id',getProductByID)




module.exports = router;