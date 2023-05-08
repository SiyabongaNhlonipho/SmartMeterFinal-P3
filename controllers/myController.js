import mongoose from "mongoose"
import User, { model5 } from "../Models/User.js"

const sch = new mongoose.Schema({

       electricity_Consumption_in_kwh: String,
       Balance_in_Rands:String,
       MeterNumber: {
                          type:Number,
                          default : '11223987645' 
                      },
                    },
      
  {timestamps: true } 
)

const sch2 = new mongoose.Schema({

       water_Consumption_in_litres: String,
       water_Flow_Rate_in_litres_per_min:String,
       outstanding_Balance_in_Rands :String,
       MeterNumber: {
                          type:Number,
                          default : '11223987645' 
                      },
                    },
  {timestamps: true } 
)


const sch3 = new mongoose.Schema({

       voucher: String,
       Value:String,
                      },   
  {timestamps: true } 
)

const sch4 = new mongoose.Schema(

   {waterMeterBalance:String,
    electricityMeterBalance: String,
                      } 
)

const modell = mongoose.model('electricityMeters', sch)
const model2 = mongoose.model('WaterMeters', sch2)
const model3 = mongoose.model('tokens', sch3)
const model4 = mongoose.model('Balances', sch4)


const post = async (req, res) => {
    
     try {
      const data = new modell ({
        electricity_Consumption_in_kwh:req.body.electricity_Consumption_in_kwh,
        Balance_in_Rands:req.body.Balance_in_Rands,
    })
    //save in collection
    const val= await data.save()

    //store in postman
    res.json(val)
    //get the date at which data was posteds
     } catch (err) {
          es.status(404).json({
        status : 'fail',
        data: err
     })} 
}

const post2 = async (req, res) => {
    
     try {
      const data2 = new model2 ({
        water_Consumption_in_litres : req.body.water_Consumption_in_litres,
       water_Flow_Rate_in_litres_per_min:req.body.water_Flow_Rate_in_litres_per_min,
       outstanding_Balance_in_Rands :req.body.outstanding_Balance_in_Rands,
    })
    //save in collection
    const val2= await data2.save()

    //store in postman
    res.json(val2)
    
     } catch (err) {
          es.status(404).json({
        status : 'fail',
        data: err
     })} 
}

const post3 = async (req, res) => {
    
     try {
      const data3 = new model3 ({
        voucher: req.body.voucher,
       Value:req.body.Value,
    })
    //save in collection
    const val3= await data3.save()

    //store in postman
    res.json(val3)
    
     } catch (err) {
          es.status(404).json({
        status : 'fail',
        data: err
     })} 
}

const post4 = async (req, res) => {
    
     try {
      const data4 = new model4 ({
       waterMeterBalance:req.body.waterMeterBalance,
       electricityMeterBalance:req.body.electricityMeterBalance,
        
    })
    //save in collection
    const val4= await data4.save()

    //store in postman
    res.json({val4})
    
     } catch (err) {
          es.status(404).json({
        status : 'fail',
        data: err
     })} 
}

const updateData = async (req, res) => {
         try{
        
        const result = await modell.findOneAndReplace({ MeterNumber:req.params.MeterNumber}, req.body, {new: true})
      
        res.status(204).json({
        status : 'success',
        data: null})
      
      } catch (err){
                res.status(404).json({
        status : 'fail',
        data: err
      })
      }
    
}

const DeleteData = async (req, res) => {
      try{
            const wat = await modell.deleteOne(({ MeterNumber:req.params.MeterNumber}))
        
            if (wat.deletedCount==1){
                res.status(204).json({
        status : 'success',
        data: null
      })
            }else res.send("invalid Meter Number")
    
      } catch (err){
                res.status(404).json({
        status : 'fail',
        data: err
      })
      }
   
}

function AddZero(num) {
  return num <10 ? `0${num}`:num;
}


const GetAllUsers = async ( req, res) => {
  try {
     const resultt = await (await (await model5.find().sort({_id :-1}).select("name  lastName email location")));

   
  let Allnames = resultt.map(function(elem){
          return elem.name
        })

  let AlllastNames = resultt.map(function(elem){
          return elem.lastName
        })
  let Allemails = resultt.map(function(elem){
          return elem.email
        })
  let Alllocations = resultt.map(function(elem){
          return elem.location
        })

     res.json({Allnames,AlllastNames,Allemails,Alllocations}) 
        res.status(204).json({
        status : 'success',
        data: null})    
  } catch (error) {
            res.status(404).json({
        status : 'fail',
        data: error,
      }) 
  }
 
}

const GetData = async ( req , res) => {
  try { 
    // Electricity Meter Data

const result = await (await (await modell.find().sort({_id :-1}).limit(7).select("Balance_in_Rands electricity_Consumption_in_kwh createdAt")));
        
        let Balance_in_Rands = result.map(function(elem){
          return elem.Balance_in_Rands
        })

        let electricity_Consumption_in_kwh = result.map(function(elem){
          return elem.electricity_Consumption_in_kwh
        })
        
          let createdAt = result.map(function(elem){
          return elem.createdAt.toDateString()
        })

        let Time = result.map(function(elem){
            let h =AddZero(elem.createdAt.getHours())
            let m =AddZero(elem.createdAt.getMinutes())
            let s =AddZero(elem.createdAt.getSeconds())
            
          return `${h}:${m}:${s}`
        })
         // Water Meter Data
        const sec_result = await (await (await model2.find().sort({_id :-1}).limit(7).select("water_Consumption_in_litres water_Flow_Rate_in_litres_per_min createdAt outstanding_Balance_in_Rands")));

        let water_Consumption_in_litres = sec_result.map(function(sec_elem){
          return sec_elem.water_Consumption_in_litres
        })
           
        let water_Flow_Rate_in_litres_per_min = sec_result.map(function(sec_elem){
          return sec_elem.water_Flow_Rate_in_litres_per_min
        })

        let outstanding_Balance_in_Rands = sec_result.map(function(sec_elem){
          return sec_elem.outstanding_Balance_in_Rands
        })
        
        
        let sec_createdAt = sec_result.map(function(sec_elem){
          return sec_elem.createdAt.toDateString()
        })

        let sec_Time = sec_result.map(function(sec_elem){
            let h =AddZero(sec_elem.createdAt.getHours())
            let m =AddZero(sec_elem.createdAt.getMinutes())
            let s =AddZero(sec_elem.createdAt.getSeconds())
            
          return `${h}:${m}:${s}`
        })
        // tokens
        const vouchers = await model3.find().select("voucher Value")
        let voucher = vouchers.map(function(thrd_elem){
          return thrd_elem.voucher
        })
         
        let Value = vouchers.map(function(thrd_elem){
          return thrd_elem.Value
        })
          

        res.json({Balance_in_Rands,electricity_Consumption_in_kwh,createdAt,Time,sec_Time,sec_createdAt,water_Flow_Rate_in_litres_per_min,water_Consumption_in_litres,outstanding_Balance_in_Rands,voucher,Value}) 
        res.status(204).json({
        status : 'success',
        data: null})    
  } catch (error) {
            res.status(404).json({
        status : 'fail',
        data: error,
      }) 
  }
}

export {post,post2,post3,post4,updateData,DeleteData,GetData,AddZero,GetAllUsers}