const Warehouse = require('../models/Warehouse.model.js');



const findAllWarehouse = async () => await Warehouse.find().populate('product.name');

const createWarehouse = async wareHouseToSave => {
    try {
        const warehouse = new Warehouse(wareHouseToSave);
        await warehouse.save();
        return warehouse;
    } catch (err) {
        throw { status: 418, msg: err.mesage}
    }
}

const findWarehouseByID = async (id) => {
    const warehouse = await Warehouse.findOne({"warehouseNumber": id});
    //not finding an object id will not throw an error, so we need to throw error manually
    if(warehouse == null){
        throw { status: 204, msg: `No warehouse with the warehouse number of ${id} was found.`}
    }
    return warehouse;
}

module.exports = { findAllWarehouse, createWarehouse, findWarehouseByID};