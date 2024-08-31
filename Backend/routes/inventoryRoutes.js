const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.post('/', inventoryController.addItem);
router.get('/', inventoryController.getItems);
router.get('/:inventoryBranch_id', inventoryController.getItemsByBranch);
router.put('/:item_id', inventoryController.updateItemQuantity);
router.delete('/:item_id', inventoryController.deleteItem);

module.exports = router;
