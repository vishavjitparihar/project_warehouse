/**
 * C- Create (POST)
 * R - Read (GET)
 * U - Update (PUT/PATCH)
 * D - Delete (DELETE)
 */



const router = require('express').Router();
const mongoose = require('mongoose');

//importing to get the functions from controller
const { findAllProduct, findProductByID, createProduct, updateProduct, deleteProductByID } = require('../controller/product.controller.js')

//middleware
const validObjectID = (req, res, next) =>{
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(204).send();
    } else {
        next();
    }
}



// GET all product
router.get('/', async (req, res) => {
    const product = await findAllProduct();
    res.json(product);
})

// GET product by it's Serial Number
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
router.put('/:id', validObjectID, async (req, res) => {
    try {
        // For PUT requests, the data to update comes through the request body as well
        await updateProduct(req.params.id, req.body);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
});

// Delete a product
router.delete('/:id', validObjectID, async(req, res) => {
    try {
        await deleteProductByID(req.params.id);
        res.send();
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

module.exports = router; 