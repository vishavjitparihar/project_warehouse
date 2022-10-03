const Warehouse = require('../models/Warehouse.model.js');


// Finding all warehouse function
const findAllWarehouse = async () => await Warehouse.find().populate('product.name');

// Creating a new Warehouse and adding it to the database
const createWarehouse = async wareHouseToSave => {
    try {
        const warehouse = new Warehouse(wareHouseToSave);
        await warehouse.save();
        return warehouse;
    } catch (err) {
        throw { status: 418, msg: err.mesage}
    }
}

// Finding Warehouse using it's warehouse number
const findWarehouseByID = async (id) => {
    const warehouse = await Warehouse.findOne({"warehouseNumber": id}).populate('product.name');
    //not finding an object id will not throw an error, so we need to throw error manually
    if(warehouse == null){
        throw { status: 204, msg: `No warehouse with the warehouse number of ${id} was found.`}
    }
    return warehouse;
}

// Updating an existing warehoues
const updateWarehouse = async (id, wareHouseToUpdate) => {
    try {
        await Warehouse.findOneAndUpdate({"warehouseNumber": id}, wareHouseToUpdate);
    } catch (error) {
        throw { status: 400, msg: err};
    }
}
module.exports = { findAllWarehouse, createWarehouse, findWarehouseByID, updateWarehouse};