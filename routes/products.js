const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');


router.get('/',productController.getHome)
router.get('/products/:id',productController.getProductDetails)

module.exports = router;