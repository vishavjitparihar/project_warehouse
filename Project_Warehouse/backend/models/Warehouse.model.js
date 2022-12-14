/**
 * Our warehouse will have the following properties
 * 
 * Warehouse name - Bakersfiled Warehouse
 * Warehouse number - 2
 * Warehouse manager - Vishavjit Parihar
 * Warehouse phone number - 661-543-6087
 * Avilable Products - iPhone, iPad, Macbook, Apple Watch
 *      Avilable product will also add the quantity of how much products are actually avilable
 */


// This file will be our Warehouse model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const warehouseSchema = new Schema({
    warehouseName: String,
    warehouseNumber: Number,
    

    product: [{
            type: mongoose.Types.ObjectId,
            ref: 'Product'                                      //we will be using object id from Product's database to add items to the warehouse 
    }],

    quantity: [{
        type: Number,
        min: [0, 'Current Capacity cannot be less than 0'],
        max: [200, 'Current Capacity cannot be greater than maximum capacity'] // The string is the error message
    }],

    max: [{
        type: Number
    }]



});


const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');
module.exports = Warehouse;