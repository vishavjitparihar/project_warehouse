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

module.exports = { findAllWarehouse, createWarehouse };