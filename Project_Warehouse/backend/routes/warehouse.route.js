/**
 * C- Create (POST)
 * R - Read (GET)
 * U - Update (PUT/PATCH)
 * D - Delete (DELETE)
 */




 const router = require('express').Router();
 const mongoose = require('mongoose');
 
 //importing to get the functions from controller
 const { findAllWarehouse, createWarehouse, findWarehouseByID, updateWarehouse, deleteWarehouseByID } = require('../controller/warehouse.controller.js')
 
 //middleware
 const validObjectID = (req, res, next) =>{
     if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
         res.status(204).send();
     } else {
         next();
     }
 }
 
 
 
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
 
 // Making changes to the existing Warehouse
 router.put('/:id', async (req, res) => {
     try{
         await updateWarehouse(req.params.id, req.body);
         res.send();
     } catch (err) {
         res.status(err?.status ?? 500).json(err);
     }
 })
 
 // Deleting an existing Warehouse
 router.delete('/:id', validObjectID, async(req, res) => {
     try {
         await deleteWarehouseByID(req.params.id);
         res.send();
     } catch (err) {
         res.status(err?.status ?? 500).json(err);
     }
 })
 
 
 module.exports = router;