const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    item_id : { type: String, required: true ,unique: true },
    item_name : { type: String, required: true },
    item_quantity : { type: Number, required:true },
    item_branch_id : { type: String, required:true},
    inventoryId: { type: String, required: true},
    item_image: {type:String},
    admin_id: { type: mongoose.Schema.Types.ObjectId,ref :'admin'},

},{timestamps: true})

module.exports = mongoose.model('inventory', inventorySchema);
