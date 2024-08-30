const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller')

router.post("/register",userController.register);
router.post("/sign-in",userController.loginUser);

module.exports = router;