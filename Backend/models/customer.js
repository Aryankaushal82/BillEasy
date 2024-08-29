const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customer_id : { type: String, required: true, unique: true },
    customer_name : { type: String },
    customer_email : { type: String, required: true },
    branch_id : { type: String },
    branch_email : { type: String , required: true}
},{timestamps: true})

module.exports = mongoose.model('customer', customerSchema)
