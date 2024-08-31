const express = require('express');
const inventoryBranchController = require('../controllers/inventoryBranchController');
const router = express.Router();

router.post('/', inventoryBranchController.addinventoryBranch);
router.get('/', inventoryBranchController.getinventoryBranches);
router.delete('/:inventoryBranch_id', inventoryBranchController.deleteinventoryBranch);

module.exports = router;
