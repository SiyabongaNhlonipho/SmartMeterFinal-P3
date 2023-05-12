import mongoose from 'mongoose'
import validator from 'validator'

const otpSchema = new mongoose.Schema ( {

     email: {
         type: String,
         required: [true , 'Please provide email'],
         validate:{
            validator: validator.isEmail,
            message: 'Please provide a valid email',
         }
    },
    code: {
         type: String,
        
    },
     expireIn: {
         type: Number,
       
    }
},{
        timestamps:true
    })
export const  otp = mongoose.model('otp', otpSchema, 'otp')

export default mongoose.model('otp', otpSchema, 'otp')

