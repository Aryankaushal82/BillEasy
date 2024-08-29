const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    item_id: { type: String, required: true, unique: true },
    item_name: { type: String, required: true },
    item_quantity: { type: Number, required: true },
    branch: { type: mongoose.Schema.Types.ObjectId, ref: 'branch' },
}, { timestamps: true })

module.exports = mongoose.model('inventory', inventorySchema)