const express = require('express');
const app = express();
const admin = require('../models/admin')

const mail = require('../helper/sendMail')
const sms = require('../helper/smsService')
const whatsapp = require('../helper/whatsapp')

const register = async (req, res) => {
  try {
    const inputData = req.body;
    if (!inputData) return res.json({
      message:"failed",
      status:"400",
      error:"please fill the form completely"

    })
    if (!inputData.admin_id || !inputData.user_name || !inputData.admin_email || !inputData.admin_password || !inputData.admin_mobile_number) {
      return res.json({
        message:"failed",
      status:"400",
      error:"please fill the missed columns"
      })
    }
    //if data already exists
    const userExist = await admin.findOne({
      $or: [{user_name},{admin_email},{admin_id}]
  });
  
  if (userExist) {
    res.json({
      message:"sucess",
      status: 409,
      message: 'User already exists'
    })
  }

  //hashing password 
  const encryptPassword = await admin.encryptPassword(password);
  
  const createUser = await admin.create({
    admin_id:inputData.admin_id,
    user_name:inputData.user_name,
    admin_email:inputData.admin_email,
    admin_password:encryptPassword,
    admin_mobile_number:inputData.admin_mobile_number
  })
  const sendMail = await mail.SendGreetMail(inputData.email)
  console.log(createUser)
  return res.json({
    message:"sucess",
    status: 200,
    data:userData,
    msg:`hey ${inputData.user_name} you are register sucessfully`
  })
  } catch (err) {
    res.send("error occured while registering the admin",err);
  }
}

const sendMessage = async (req, res) => {
  console.log('hello')
  try {
    const sendMessage = await sms.sendAccountCreateGreetSms();
    console.log(sendMessage);
    res.json({
      status: 200,
      message: `Register successfull `,
      messageSent: sendMessage
    });
  } catch (err) {
    res.send(err)
  }
}
const sendWhatsapp = async (req, res) => {
  console.log('hello')
  try {
    const sendMessage = await whatsapp.sendAccountCreateGreetWhatsapp();
    console.log(sendMessage);
    res.json({
      status: 200,
      message: `Register successfull `,
      messageSent: sendMessage
    });
  } catch (err) {
    res.send(err)
  }
}
const getUsers = async (req, res) => {
  try {
    const getData = await user.find();
    res.json({
      status: 200,
      message: 'User Found',
      data: getData
    })
  } catch (err) {
    res.send(err);
  }
}
const updateUser = async (req, res) => {
  try {
    const id = req.params._id;
    const inputData = req.body;
    const updateData = await user.findByIdAndUpdate(id, inputData, {
      new: true
    })
    res.json({
      status: 200,
      message: 'User Updated',
      data: updateData
    })
  } catch (err) {
    res.send(err);
  }
}
const deleteUser = async (req, res) => {
  try {
    const id = req.params._id;
    const deleteData = await user.findByIdAndDelete(id)
    res.json({
      status: 200,
      message: 'User Deletes',
      data: deleteData
    })
  } catch (err) {
    res.send(err);
  }
}
module.exports = { register, getUsers, updateUser, deleteUser, sendMessage, sendWhatsapp }
