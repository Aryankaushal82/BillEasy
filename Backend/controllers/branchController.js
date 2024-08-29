const express = require('express');
const branch = require('../models/branch');

// Create a new branch
const createBranch = async (req, res) => {
  try {
    const newBranch = new branch(req.body);
    const savedBranch = await newBranch.save();
    return res.status(201).json({
      message: 'Branch created successfully',
      data: savedBranch
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error creating branch',
      error: err.message
    });
  }
};

// Get all branches
const getBranches = async (req, res) => {
  try {
    const branches = await branch.find().populate('admin');
    return res.status(200).json({
      message: 'Branches retrieved successfully',
      data: branches
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving branches',
      error: err.message
    });
  }
};

// Get a single branch by ID
const getBranchById = async (req, res) => {
  try {
    const branchData = await branch.findById(req.params.id).populate('admin');
    if (!branchData) {
      return res.status(404).json({
        message: 'Branch not found'
      });
    }
    return res.status(200).json({
      message: 'Branch retrieved successfully',
      data: branchData
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving branch',
      error: err.message
    });
  }
};

// Update a branch by ID
const updateBranch = async (req, res) => {
  try {
    const updatedBranch = await branch.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('admin');

    if (!updatedBranch) {
      return res.status(404).json({
        message: 'Branch not found'
      });
    }

    return res.status(200).json({
      message: 'Branch updated successfully',
      data: updatedBranch
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error updating branch',
      error: err.message
    });
  }
};

// Delete a branch by ID (assuming this is a required functionality)
const deleteBranch = async (req, res) => {
  try {
    const deletedBranch = await branch.findByIdAndDelete(req.params.id);
    if (!deletedBranch) {
      return res.status(404).json({
        message: 'Branch not found'
      });
    }
    return res.status(200).json({
      message: 'Branch deleted successfully',
      data: deletedBranch
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Error deleting branch',
      error: err.message
    });
  }
};

module.exports = {
  createBranch,
  getBranches,
  getBranchById,
  updateBranch,
  deleteBranch // Add this if branch deletion is required
};
