/**
 * C- Create (POST)
 * R - Read (GET)
 * U - Update (PUT/PATCH)
 * D - Delete (DELETE)
 */



const router = require('express').Router();
const mongoose = require('mongoose');

//importing to get the functions from controller
const { findAllProduct, findProductByID, createProduct } = require('../controller/product.controller.js')

//middleware
// if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     throw {status: 204, msg: 'No product found'}
// }

// GET all product
router.get('/', async (req, res) => {
    const product = await findAllProduct();
    res.json(product);
})

// GET product by ID
router.get('/:id', async (req, res) => {
    //req.params.id will get the input from the URL
    try {
        const product = await findProductByID(req.params.id);
        res.json(product);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

// Create a product
router.post('/', async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

// Update a product


// Delete a product

module.exports = router;