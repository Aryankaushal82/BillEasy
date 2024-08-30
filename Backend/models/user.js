const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { tokens } = require('../config/cred');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    user_id: { type: String, required: true, unique: true },
    user_username: { type: String, required: true },
    user_email: { type: String, required: true, unique: true },
    user_password: { type: String, required: true, unique: true},
    admin_ref: { type: String, required: true,unique: true},
    branch_id: { type: String,required:true, unique: true},
    user_fullname: { type: String,},
    user_designation: { type: String},
    user_role: { type: String },
    user_status: { type: String },
    user_profile: { type: String},
    user_phone_number: { type: Number, default:987654321},
    user_refreshToken:{type:String},
    admin:{type: mongoose.Schema.Types.ObjectId,ref:'admin'},
}, { timestamps: true });

// userSchema.methods.isPasswordCorrect = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

userSchema.methods.generateAccessToken = async function(){
    //todo
    return  jwt.sign({
        _id: this._id,
        email: this.user_email,
        username: this.user_username,
        fullname: this.user_fullname
    },tokens.ACCESS_TOKEN_SECRET,{expiresIn:tokens.ACCESS_TOKEN_EXPIRY})
}
userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign({
        _id:this._id
    },tokens.REFRESH_TOKEN_SECRET,{expiresIn:tokens.REFRESH_TOKEN_EXPIRY});
}

module.exports = mongoose.model('user', userSchema);
