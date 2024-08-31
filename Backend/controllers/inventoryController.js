const Inventory = require('../models/inventory');
const InventoryBranch = require('../models/inventoryBranch');

// Add a new inventory item
exports.addItem = async (req, res) => {
  try {
    const { item_id, item_name, item_quantity, inventoryBranch_id } = req.body;

    // Check if all required fields are provided
    if (!item_id || !item_name || !item_quantity || !inventoryBranch_id) {
      return res.status(400).json({
        message: "failed",
        error: "Please fill all required fields"
      });
    }

    // Check if the inventoryBranch already exists
    const itemExist = await InventoryBranch.findOne({ item_id });

    if (itemExist) {
      return res.status(409).json({
        message: "failed",
        error: 'Inventory branch with this ID already exists'
      });
    }

    const inventorybranch = await InventoryBranch.findOne({ inventoryBranch_id });
    if (!inventorybranch) {
      return res.status(404).json({ message: 'Inventory branch not found' });
    }

    const newItem = new Inventory({
      item_id,
      item_name,
      item_quantity,
      inventoryBranch: inventorybranch._id
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all inventory items
exports.getItems = async (req, res) => {
  try {
    const items = await Inventory.find().populate('inventoryBranch');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get items by inventoryBranch
exports.getItemsByBranch = async (req, res) => {
  try {
    const { inventoryBranch_id } = req.params;
    const inventorybranch = await InventoryBranch.findOne({ inventoryBranch_id });

    if (!inventorybranch) {
      return res.status(404).json({ message: 'Inventory inventorybranch not found' });
    }

    const items = await Inventory.find({ inventoryBranch: inventorybranch._id }).populate('inventoryBranch');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update inventory item quantity
exports.updateItemQuantity = async (req, res) => {
  try {
    const { item_id } = req.params;
    const { item_quantity } = req.body;

    const item = await Inventory.findOne({ item_id });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    item.item_quantity = item_quantity;
    await item.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an inventory item
exports.deleteItem = async (req, res) => {
  try {
    const { item_id } = req.params;

    const item = await Inventory.findOneAndDelete({ item_id });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
