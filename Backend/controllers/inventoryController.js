const express = require('express');
const Inventory = require('../models/inventory');

// Create a new inventory item
const createInventoryItem = async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();
    return res.status(201).json({
      message: 'Inventory item created successfully',
      data: savedItem
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error creating inventory item',
      error: err.message
    });
  }
};

// Get all inventory items
const getInventoryItems = async (req, res) => {
  try {
    const items = await Inventory.find().populate('branch');
    return res.status(200).json({
      message: 'Inventory items retrieved successfully',
      data: items
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving inventory items',
      error: err.message
    });
  }
};

// Get a single inventory item by ID
const getInventoryItemById = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id).populate('branch');
    if (!item) {
      return res.status(404).json({
        message: 'Inventory item not found'
      });
    }
    return res.status(200).json({
      message: 'Inventory item retrieved successfully',
      data: item
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving inventory item',
      error: err.message
    });
  }
};

// Update an inventory item by ID
const updateInventoryItem = async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('branch');

    if (!updatedItem) {
      return res.status(404).json({
        message: 'Inventory item not found'
      });
    }

    return res.status(200).json({
      message: 'Inventory item updated successfully',
      data: updatedItem
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error updating inventory item',
      error: err.message
    });
  }
};

// Delete an inventory item by ID
const deleteInventoryItem = async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: 'Inventory item not found'
      });
    }

    return res.status(200).json({
      message: 'Inventory item deleted successfully',
      data: deletedItem
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error deleting inventory item',
      error: err.message
    });
  }
};

module.exports = {
  createInventoryItem,
  getInventoryItems,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem
};
