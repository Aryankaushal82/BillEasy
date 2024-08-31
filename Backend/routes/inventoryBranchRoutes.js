const express = require('express');
const inventoryBranchController = require('../controllers/inventoryBranchController');
const router = express.Router();

router.post('/', inventoryBranchController.addInventoryBranch);
router.get('/', inventoryBranchController.getInventoryBranches);
router.get('/:branch_id', inventoryBranchController.getItemsUnderBranch);
router.delete('/:inventoryBranch_id', inventoryBranchController.deleteInventoryBranch);

module.exports = router;
