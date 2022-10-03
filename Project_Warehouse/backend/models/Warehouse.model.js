/**
 * Our warehouse will have the following properties
 * 
 * Warehouse name - Bakersfiled Warehouse
 * Warehouse number - 2
 * Warehouse manager - Vishavjit Parihar
 * Warehouse phone number - 661-543-6087
 * Address - 1211 Main St, Bakersfield, CA - 93003
 * Avilable Products - iPhone, iPad, Macbook, Apple Watch
 *      Avilable product will also add the quantity of how much products are actually avilable
 */


// This file will be our Warehouse model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const warehouseSchema = new Schema({
    warehouseName: String,
    warehouseNumber: Number,
    manager: String,
    phone: String,

    address: {
        stAddress: String,
        city: String,
        State: String,
        zip: String
    },

    //maximum capacity this warehouse can store
    maxCapacityIPhone: Number,
    maxCapacityIPad: Number,
    maxCapacityMac: Number,
    maxCapacityWatch: Number,

    //how many items are currently at the warehouse
    currCapacityIPhone: Number,
    currCapacityIPad: Number,
    currCapacityMac: Number,
    currCapacityWatch: Number,

    product: [{
        name: {
            type: mongoose.Types.ObjectId,
            ref: 'Product'                                      //we will be using object id from Product's database to add items to the warehouse 
        },
        quantity: Number
    }]
});


const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');
module.exports = Warehouse;