const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');
const authorize = require('../middlewares/authorize')

router.post("/register",userController.register);
router.post("/sign-in",userController.loginUser);
router.get("/logout",authorize.verifyJwt,userController.logoutUser);
router.post("/update-details",authorize.verifyJwt,userController.updateUserDetails);
module.exports = router;