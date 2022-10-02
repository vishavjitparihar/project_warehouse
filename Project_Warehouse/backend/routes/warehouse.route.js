const router = require('express').Router();
const { findAllWarehouse,createWarehouse } = require('../controller/warehouse.controller.js')

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

module.exports = router;