 import express from 'express'
 const router = express.Router()

import rateLimiter from "express-rate-limit";

 const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: "Too many requests from this IP, please try again after 15 minutes",
});

import  {register , login , updateUser,emailSend,changePassword } from '../controllers/authController.js'
import authenticateUser from "../middleware/auth.js";

router.route('/register').post(apiLimiter,register)
router.route('/login').post(apiLimiter,login)
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route('/email-send').post(emailSend);
router.route('/change-password').post(changePassword);


 export default router
