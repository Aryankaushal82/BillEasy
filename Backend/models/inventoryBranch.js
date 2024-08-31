const mongoose = require('mongoose');

const inventoryBranchSchema = new mongoose.Schema({
  inventoryBranch_id: {
    type: String,
    required: true,
    unique: true
  },
  inventoryBranch_type: {
    type: String,
    enum: ['Shop', 'Warehouse', 'Rented Warehouse'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  // storage: {
  //   type: Number,

  // },
  branch_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'branch'
  }
}, { timestamps: true });

const InventoryBranch = mongoose.model('InventoryBranch', inventoryBranchSchema);
module.exports = InventoryBranch;
