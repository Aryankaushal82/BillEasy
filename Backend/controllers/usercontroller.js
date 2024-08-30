const user = require("../models/user");
const bcrypt = require("bcryptjs");
const mail = require('../helper/sendMail')




const generateRefreshToken =async (userId)=>{
  try {
    //find data
    //create refresh token
    const banda = await user.findById(userId);
    if (!banda) return res.status(400).json({success:false,messgae: "banda not found"});
    const refreshToken = banda.generateRefreshToken();
    return refreshToken;
  } catch (error) {
    return res.status(500).json({
      success:false,
      messgae: "error generating refresh token",error,
    })
  }
}
const generateAccessToken =async (userId)=>{
  try {
    //find data
    //create access token
    const banda = await user.findById(userId);
    if (!banda) return res.status(400).json({success:false,messgae: "banda not found"});
    const accessToken = banda.generateAccessToken();
    return accessToken;
  } catch (error) {
    return res.status(500).json({
      success:false,
      messgae: "error generating Access token",error,
    })
  }
}

const register = async (req, res) => {
    try {
      const inputData = req.body;
      if (!inputData) {
        return res.json({
          message: "failed",
          status: "400",
          error: "please fill the form completely"
        });
      }
  
      const {user_id,user_username,user_email,user_password,admin_ref,branch_id} = inputData;
  
      if (!user_id || !user_username || !user_email || !user_password || !admin_ref || !branch_id) {
        return res.json({
          message: "failed",
          status: "400",
          error: "please fill the missed columns"
        });
      }
  
      // Check if data already exists
      const userExist = await user.findOne({
        $or: [{ user_username }, { user_email }, { user_id }]
      });
  
      if (userExist) {
        return res.json({
          message: "failed",
          status: 409,
          message: 'User already exists'
        });
      }
  
      // Hashing password 
      const encryptPassword = await bcrypt.hash(user_password,10);
      if (!encryptPassword) {
        return res.json({sucess: false,message:"dikkat aari hai"});
      }
  
      const createUser = await user.create({
        user_id: user_id,
        user_username: user_username,
        user_email: user_email,
        user_password:encryptPassword,
        admin_ref:admin_ref,
        branch_id:branch_id
      });

      const refreshToken = await generateRefreshToken(createUser._id);
      if (!refreshToken){
        response.status(500).json({
            sucess: false,
            message: "internal server error while creating refresh token"
        })
      }
      console.log(refreshToken);
      //token aagya
      createUser.user_refreshToken = refreshToken;
      await createUser.save({validateBeforeSave: false});
  
      // Send email
      await mail.SendGreetMail({
        email:user_email,
        name:user_username,
        pno:createUser.user_phone_number
      });

      const registerUser = await user.findById(createUser._id).select("-user_password -user_refreshToken");
  
      return res.json({
        message: "success",
        status: 200,
        data: registerUser,
        msg: `Hey ${registerUser.user_username}, you have registered successfully`
      });
    } catch (err) {
      res.status(500).send("Error occurred while registering the user: " + err);
    }
  }
  
  const sendMessage = async (req, res) => {
    try {
      const sendMessage = await sms.sendAccountCreateGreetSms();
      res.json({
        status: 200,
        message: `Register successful`,
        messageSent: sendMessage
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
  const loginUser = async(req,res)=>{
    try {
      //take email and password
      //find user whether user exist
      //verify password using bcrypt
      //generate access token and refresh token
      //send cookies

      //data
      const inputData = req.body;
      //verify
      if (!inputData) {
        return res.status(400).json({
          success: false,
          status: "400",
          error: "please fill the form completely"
        });
      }
      //data coming
      const {user_email,user_password,branch_id}=inputData;
      //check if every entry is valid
      if(!user_email || !user_password || !branch_id){
        return res.status(400).json({
          success: false,
          status: "400",
          error: "please fill the missed columns"
        });
      }
      //valid hai bhai

      //find user in db
      const checkData = await user.findOne({
        $or:[{user_email},{branch_id}]
      });
      if (!checkData){
        return res.status(500).json({
          success: false,
          status: "500",
          error: "user not found!!"
        });
      };
      //user hai 
      const checkPass = await bcrypt.compare(user_password,checkData.user_password);
      if (!checkPass){
        return res.status(500).json({
          success: false,
          status: "500",
          error: "Wrong Credentials!!"
        });
      };
      // console.log(checkPass);

      //access and refresh token bnao
      const accessToken = await generateAccessToken(checkData._id);
      const refreshToken = checkData.user_refreshToken;
      console.log(refreshToken);
      // console.log(accessToken);
      const finalUser = await user.findById(checkData._id).select("-user_password -user_refreshToken");

      // console.log(finalUser);
      
      const options = {
        httpOnly: true,
        secure: true,
        //isme abh hamari cookie sirf server se hi modifiable hogi frontend par koi ese modify nhi kr skta.
    }
    return res.
    status(200).cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options).json({
      success:true,
      status:200,
      data:finalUser,
      message: "user sign in succesfully"
    })

      
    } catch (error) {
      res.status(500).json({
        success:false,
        error:error.message,
      })
    }
  }


  

  module.exports= {register,loginUser};