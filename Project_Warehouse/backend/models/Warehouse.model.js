/**
 * Our warehouse will have the following properties
 * 
 * Warehouse name - Bakersfiled Warehouse
 * Warehouse number - 2
 * Warehouse phone number - 661-370-5466
 * Avilable Products - iPhone, iPad, Macbook, Apple Watch
 *      Avilable product will also add the quantity of how much products are actually avilable
 * Warehouse Capacity - 2000
 */


// This file will be our Warehouse model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const warehouseSchema = new Schema({
    name: {
        type: String,
    },

    warehouseNumber: {
        type: Number,
    },

    inventory: {
        type: [{
            type: mongoose.Types.ObjectId,
            ref: 'Product'
        }]
    }

     // phone: {
    //     type: Number,
    // },

    // iPhoneQuantity: {
    //     type: Number,
    //     // min: [0, 'Quntity cannot be negative'],
    //     // max: [800, 'Warehouse capacity for iPhone is only 200']
    // }
    

});


const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');
module.exports = Warehouse;