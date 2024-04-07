const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = 'mongodb+srv://'+ process.env.DBUSER +':'+ process.env.DBPASSWD +''+ process.env.CLUSTER +'.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority'
 
mongoose.connect(dbURI); 

const Product = require('../models/Product');

// home root
const getHome = (req,res) => {
    res.send('My MVC App');
}


// productDetails, get 1 product

const getProductDetails = async (req,res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);     
        res.render('index', {
            product : product.toJSON()
        });
    }
    catch(err) {
        res.status(404).json({
            msg: "not found"
        })   
    } 
}

// listAllProducts

// addProduct

module.exports = {getHome,getProductDetails}