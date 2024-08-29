const express = require('express');
const app = express();
const user = require('../models/admin')

const mail = require('../helper/sendMail')
const sms = require('../helper/smsService')
const whatsapp = require('../helper/whatsapp')

const register = async (req, res) => {
  try {
    const inputData = req.body;
    console.log('register', inputData);

    if (!inputData.admin_id || !inputData.user_name || !inputData.admin_email || !inputData.admin_password || !inputData.admin_mobile_number) {
      console.log("Provide data");
      return res.send('Provide data')
    }
    //if data already exists
    const checkId = await user.findOne({ 'Id': inputData.admin_id });
    const checkName = await user.findOne({ 'Id': inputData.user_name });
    const checkEmail = await user.findOne({ 'email': inputData.admin_email });
    const checkMobile = await user.findOne({ 'mobile_number': inputData.admin_mobile_number });
    console.log(checkEmail);

    if (checkEmail || checkMobile || checkId || checkName) {
      res.json({
        status: 409,
        message: 'User already exists'
      })
    }
    ///
    const createUser = await user.create(inputData);
    const sendMail = await mail.SendGreetMail(inputData.email)
    console.log('create', createUser);
    res.json({
      status: 200,
      message: 'Register successfull',
      data: inputData,
      db: createUser,
      mailSent: sendMail
    });
  } catch (err) {
    res.send(err);
  }
}
const sendEmail = async (req, res) => {
  try {
    const inputData = req.body;
    const sendMail = await mail.SendGreetMail(inputData);
    console.log(sendMail);
    res.json({
      status: 200,
      message: `Register successfull `,
      data: inputData,
      mailSent: sendMail
    });
  } catch (err) {
    res.send(err)
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
module.exports = { register, getUsers, updateUser, deleteUser, sendEmail, sendMessage, sendWhatsapp }
