import User from "../Models/User.js"
import { StatusCodes } from "http-status-codes"
import {BadRequestError,UnauthenticatedError} from '../errors/index.js'
import otp from "../Models/otp.js"
import nodemailer from "nodemailer"
 const register = async ( req, res) => {
    const { name, email , password} =req.body

    if (!name || !email || !password ){
        throw new BadRequestError('please provide all values')
    }
    const userAlreadyExists = await User.findOne({email});

    if(userAlreadyExists) {
        throw new BadRequestError ('Email already in use')
    }
    const user = await User.create({ name, email , password})
    //token
    const token = user.createJWT()

    res.status(StatusCodes.CREATED)
    .json({ 
        user: {
            email: user.email,
            lastName: user.lastName,
            location: user.location,
            name: user.name
          } ,
            token,
            location: user.location 
        })
     
}
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password ) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user ) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

 const updateUser = async ( req, res) => {
    const {email,name,lastName,location}=req.body
     if (!email || !name || !lastName || !location ){
      throw new BadRequestError("Please provide all VAlues")
     }

     const user = await User.findOne({_id:req.user.userId})

     user.email= email
     user.name= name
     user.lastName= lastName
     user.location= location

    await user.save()
    
    const token = user.createJWT()

    res.status(StatusCodes.OK).json({ user, token, location: user.location });
}

const emailSend = async (req, res) => {
  let data = await User.findOne({email:req.body.email})
  const responseType = {};
  if(data){
    let otpCode = Math.floor((Math.random()*10000)+1)
    let otpData =new otp({
        email:req.body.email,
        code:otpCode,
        expireIn: new Date().getTime() + 300*1000
    }) 
    let otpResponse = await otpData.save()
    responseType.statusText = 'Success'

    responseType.message = 'Please Check Your Email'

  }else {
    responseType.statusText = 'Error'
    responseType.message = 'Email id does not Exist'
  }
  res.status(StatusCodes.OK).json(responseType);
};

const changePassword = async (req, res) => {
 
  let data = await otp.find({email:req.body.email,code:req.body.otpCode})
  const response = {}
  if(data){
    let currentTime = new Date().getTime()
    let diff = data.expireIn - currentTime
    if(diff < 0){
      response.message = 'Token Expire'
      response.statusText = 'Error'
    }else {
      let user = await user.findOne({email:req.body.email})
      user.password = req.body.password
      user.save()
      response.message = 'Password changed successfully'
      response.statusText = 'Success'
    }
  }else {
    response.message = 'Invalid OTP'
      response.statusText = 'Error'
  }
};

const mailer = (email,otp) =>{

  // creating reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:"gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'code@example.com', // generated ethereal user
      pass: '9898998', // generated ethereal password
    },
  });

  // send mail with defined transport object
  var mailOptions = ({
    from: 'code@example.com', 
    to: "peter@example.com", 
    subject: "Reset Password", 
    text: "Thank you sir", 
  
  });

  transporter.sendMail(mailOptions, (error, info)=>{
     if(error){
      console.log(error)
    }else{
      console.log('Email sent' + info.response)
    }
  })

}

export { register , login , updateUser,emailSend,changePassword}