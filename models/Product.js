const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({ 
    name: String, 
    price: Number
}); 

// Database function CRUD

module.exports = mongoose.model("Product", productSchema); 