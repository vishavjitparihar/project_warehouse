/**
 * Our Product will have the followings:
 * 
 * Model Name - iPhone 14 Pro Max
 * Color - Black
 * Storage(in gigabyte) - 512
 * isRefurbished - false
 * Tag - Mobile Phone
 * * isCellular - true
 * Serial ID - AMP1411BLK512FT000
 * 
 */

/**
 * Serial ID explained for iPhones
 * 
 * Every product will have a unique serial ID
 * Serial ID is a combination of the physical specs of the product
 * In our example we have AMP1411BLK512FT0000
 * A - Apple
 * MP - Mobile Phone
 * 14 - Product Number (this will be same for all the iPhone 14s)
 * 11 - Pro Max (00-Base 14; 01-Base 14 Max; 10-Pro 14; 11-Pro 14 Max)
 * BLk - Color Black
 * 512 - Storage
 * F - Not Refurbished
 * T - is Cellular
 * 000 - No carrier lock (000-No Lock, 001-ATT, 010-Verizon, 011-Sprint, 100-TMobile)
 */



//This file will be our data model for Product Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Schema is a class that we can create our DB schemas with

const productSchema = new Schema({
    //we will define our schema in here

    _id: String,
    model: String,
    color: String,
    storage: Number,
    isRefurbished: Boolean,
    tag: String,
    isCellular: Boolean,
    carrierLock: String,
    image: String
})


//We will turn this schema into a model
const Product = mongoose.model('Product', productSchema, 'Product');
module.exports = Product;