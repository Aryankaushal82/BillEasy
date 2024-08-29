const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_id : { type: String, required: true, unique: true },
    user_name : { type: String, required: true },
    user_email : { type: String, required: true, unique: true },
    user_role : { type: String },
    user_status : { type: String },
    user_assigned_branch : { type:  String}
})

module.exports = mongoose.model('user', userSchema)
