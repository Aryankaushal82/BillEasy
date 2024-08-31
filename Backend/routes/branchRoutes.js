const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router.post('/', branchController.createBranch);
router.get('/', branchController.getBranches);
router.get('/:id', branchController.getBranchById);
router.put('/:id', branchController.updateBranch);
// Shift inventory items to another inventory branch when inventory branch type changes
router.put('/:id/shift-inventory', branchController.shiftInventoryItems);
router.delete('/:id', branchController.deleteBranch);

module.exports = router;
