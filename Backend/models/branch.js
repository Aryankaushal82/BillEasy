const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  branch_id: { type: String },
  branch_email: { type: String, required: true },
  branch_phno: { type: String, required: true },
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' },
}, { timestamps: true })

module.exports = mongoose.model('customer', customerSchema)
