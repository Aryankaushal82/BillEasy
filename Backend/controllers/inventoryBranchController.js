const InventoryBranch = require('../models/inventoryBranch');

// Add a new inventoryBranch
exports.addinventoryBranch = async (req, res) => {
  try {
    const { inventoryBranch_id, inventoryBranch_type, location } = req.body;

    // Check if all required fields are provided
    if (!inventoryBranch_id || !inventoryBranch_type || !location) {
      return res.status(400).json({
        message: "failed",
        error: "Please fill all required fields"
      });
    }

    // Check if the inventoryBranch already exists
    const branchExist = await InventoryBranch.findOne({ inventoryBranch_id });

    if (branchExist) {
      return res.status(409).json({
        message: "failed",
        error: 'Inventory branch with this ID already exists'
      });
    }

    // Check if an inventoryBranch of the same type already exists under the same branch
    const existingBranch = await InventoryBranch.findOne({
      inventoryBranch_type,
      branch_id
    });

    if (existingBranch) {
      return res.status(409).json({
        message: "failed",
        error: `An inventory branch of type '${inventoryBranch_type}' already exists under this branch.`
      });
    }

    const newInventoryBranch = new InventoryBranch({
      inventoryBranch_id,
      inventoryBranch_type,
      location
    });

    await newInventoryBranch.save();
    res.status(201).json(newInventoryBranch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get all inventoryBranches
exports.getinventoryBranches = async (req, res) => {
  try {
    const inventoryBranches = await InventoryBranch.find();//AFTER BRANCH CONTROLLER IS MADE CONNECT IT WITH ITS ID
    res.status(200).json(inventoryBranches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a inventoryBranch
exports.deleteinventoryBranch = async (req, res) => {
  try {
    const { inventoryBranch_id } = req.params;

    const inventoryBranch = await InventoryBranch.findOneAndDelete({ inventoryBranch_id });
    if (!inventoryBranch) {
      return res.status(404).json({ message: 'inventoryBranch not found' });
    }

    res.status(200).json({ message: 'inventoryBranch deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
