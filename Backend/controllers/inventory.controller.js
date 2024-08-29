const inventory = require('../models/inventory');

// Add product
const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (!productData) {
            return res.status(400).json({ message: 'Data is required' });
        }

        const { item_id, item_name, item_quantity, inventoryId, item_branch_id } = productData;

        if (!item_id || !item_name || !item_quantity || !inventoryId || !item_branch_id) {
            return res.status(400).json({ message: 'Fill the missing data' });
        }

        const itemPresent = await inventory.findOne({item_id:item_id});
        if (itemPresent) return res.status(400).json({ message: 'Item already exists. Do you want to update it?' });

        const newItem = await inventory.create({
            item_id,
            item_name,
            item_quantity,
            item_branch_id,
            inventoryId
        });

        return res.status(200).json({ message: "Success", data: newItem, msg: "Item added to your inventory" });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Get all items
const getAllItems = async (req, res) => {
    try {
        const items = await inventory.find();
        return res.status(200).json({ data: items });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Get item by ID
const getItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await inventory.findById(id);

        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.status(200).json({ data: item });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Update item by ID
const updateItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedItem = await inventory.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.status(200).json({ message: 'Item updated successfully', data: updatedItem });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Delete item by ID
const deleteItemById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await inventory.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        return res.status(200).json({ message: 'Item deleted successfully', data: deletedItem });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    addProduct,
    getAllItems,
    getItemById,
    updateItemById,
    deleteItemById
};
