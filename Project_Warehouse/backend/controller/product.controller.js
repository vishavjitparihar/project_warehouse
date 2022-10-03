// All of the logic is in this file

const Product = require('../models/Product.model.js'); //as it will be talking directly to the models


//find all product
const findAllProduct = async () => {
    const product = await Product.find(); //this will find all the products
    return product;
};

//find one specific product based on it's ID
const findProductByID = async (id) => {
    //not finding an object id will not throw an error, so we need to throw error manually
    const product = await Product.findOne({"serialNum": id});
    if(product == null) {
        throw { status: 204, msg: `No product with the product id of ${id} was found.`}
    }
    return product;
};

//create a new product
const createProduct = async (productToBeSaved) => {
    try {
        //we will use the model file and create instance of it
        const product = new Product(productToBeSaved);
        await product.save(); //this will save the instance of Product to the database
        return product;
    } catch (err) {
        throw err;
    }
}

//find one specific product and make changes to that
const updateProduct = async (id, productToUpdate) => {
    try {
        await Product.findByIdAndUpdate(id, productToUpdate);
    } catch (err) {
        throw {status: 400, msg: err};
    }
}


//find one specifif product and delete it
const deleteProductByID = async id => await Product.findByIdAndDelete(id);

module.exports = { findAllProduct, findProductByID, createProduct, updateProduct, deleteProductByID };