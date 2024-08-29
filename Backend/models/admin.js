const mongoose = require('mongoose');
const tokens = require('../config/cred');
const bcrypt = require('bcrypt');
const adminSchema = new mongoose.Schema({
    admin_id: { type: String, required: true, unique: true },
    user_name: { type: String, required: true, unique: true },
    admin_name: { type: String,required: true},
    admin_email: { type: String, required: true, unique: true },
    admin_password: { type: String, required: true },
    admin_mobile_number: { type: Number, required: true, unique: true },
    admin_plan_type: { type: String },
    company_id: { type: String },
    company_name: { type: String },
    company_address: { type: String },
    company_industry: { type: String },
    pan_number: { type: String },
    gst_number: { type: String },
    refresh_token: { type: String },
},{timestamps: true});


adminSchema.methods.encryptPassword = async function (password){
    return await bcrypt.hash(password,10);
}
adminSchema.methods.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password); 
}
// userSchema.methods.generateAccessToken = async function(){
//     return await jwt.sign({
//         _id: this._id,
//         email: this.email,
//         username: this.username,
//         fullname: this.fullname
//     },tokens.ACCESS_TOKEN_SECRET,{expiresIn:tokens.ACCESS_TOKEN_EXPIRY})
// };
// userSchema.methods.generateRefreshToken = async function(){
//     return await jwt.sign({
//         _id: this._id,
//     },tokens.REFRESH_TOKEN_SECRET,{expiresIn:tokens.REFRESH_TOKEN_EXPIRY })
// };

module.exports = mongoose.model('admin', adminSchema)
