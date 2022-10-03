const router = require('express').Router();

//importing to get the functions from controller
const { findAllWarehouse, createWarehouse, findWarehouseByID } = require('../controller/warehouse.controller.js')

// Find all warehouse
router.get('/', async(req, res) => {
    try {
        const warehouse = await findAllWarehouse();
        res.status(200).json(warehouse)
    } catch (err) {
        res.status(500).json(err);
    }
})

// Adding  Warehouse
router.post('/', async (req, res) => {
    try {
        const warehouse = await createWarehouse(req.body);
        res.status(201).json(warehouse);
    } catch (err) {
        res.status(err?.status ?? 500).json(err);
    }
})

// Finding a Warehouse using it's Warehouse Number
router.get('/:id', async (req, res) => {
    try{
        const warehouse = await findWarehouseByID(req.params.id);
        res.json(warehouse);
    } catch (err) {
        res.status(err?.status).json(err);
    }
})

module.exports = router;