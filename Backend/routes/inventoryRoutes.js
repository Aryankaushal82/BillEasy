const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.addItem);
router.get('/:inventoryBranch_id', inventoryController.getItemsByBranch);
router.put('/:id', inventoryController.updateItem);
router.delete('/:id', inventoryController.deleteItem);

module.exports = router;
