import React,{ useState ,useEffect} from "react";
import { FormRow, Alert } from "../../Components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppContext } from "../../Context/appContext";
import Loading from "../../Components/Loading";

const Recharge = () => {
  
  //Fetching Data
    const {getData,Value,voucher,PostVoucher, isLoading, Balance_in_Rands,outstanding_Balance_in_Rands} = useAppContext()

   useEffect(()=>{
            getData()
   }, [])
   

  const[waterMeterBalance,setwaterMeterBalance] =useState('')
  const[electricityMeterBalance,setelectricityMeterBalance] =useState('')
  const[capture_Water,setCapture_Water] =useState('')
  const[capture_electricity,setCapture_electricity] =useState('')

  const handleSubmit = (event) => { 
    event.preventDefault()
    setCapture_Water(`${waterMeterBalance}`)
    setCapture_electricity(`${electricityMeterBalance}`)
    //PostVoucher(capture)
    let voucherr; 
    let x ; let y;
    for (let i =0 ; i< voucher.length; i++){


          if (capture_Water === voucher[i]){
                for (let j =0 ; j< outstanding_Balance_in_Rands.length; j++){
                x= Value[i]
                voucherr ={waterMeterBalance:x,electricityMeterBalance:'0'}
               
                  }
                 
          }
          if (capture_electricity === voucher[i]){
                for (let j =0 ; j< Balance_in_Rands.length; j++){
                  y =Value[i]
                  voucherr ={waterMeterBalance:x,electricityMeterBalance:y}
                      
                 }
                 alert(" Successfully  Recharged  !!");
           }

          if (capture_Water === voucher[i] && capture_electricity === voucher[i] ){

                for (let j =0 ; j< outstanding_Balance_in_Rands.length; j++){
                x= parseFloat(Value[i])
                voucherr ={waterMeterBalance:x,electricityMeterBalance:outstanding_Balance_in_Rands[0]}
         
                  
              }

                      alert(" Successfully  Recharged For Water Meter !!");
                       alert(" You can Not Use The same Voucher Twice!!");
           }
         
      } //end 1st for loop
      PostVoucher(voucherr) 
        
    } // stop handle

 if(isLoading){
   
        <Loading center />
      
    }
    return (

        <Wrapper>
                            
            <form className="form" onSubmit={handleSubmit} >

                 <h1>recharging Made Easy <h3> <i> NOTICE!!</i> </h3></h1>
                    <h5> Follow the following steps to recharge</h5>
                    <h5>1.Buy your electricity or water voucher at any store using <i>Your</i>  Meter Number!!</h5>
                    <h5>2.Enter your voucher in the correct voucher fields provided below</h5>
                    <h5>3.Finally , Click the submit button</h5>

                     <div>
                        
                            </div>

                    <div className="form-center">

                    <input
                        labelText="electricity voucher"
                        type="text"
                        name="electricity voucher"
                        id = "electricityMeterBalance"
                        value = {electricityMeterBalance}
                        placeholder = "Enter Your Electricity voucher"
                        onChange = {(event) => setelectricityMeterBalance(event.target.value)}
                    />
                    <input
                        labelText="water voucher"
                        type="text"
                        name="water voucher"
                        id = "waterMeterBalance"
                        value ={waterMeterBalance} 
                        placeholder = "Enter Your Water voucher"
                        onChange = {(event) => setwaterMeterBalance(event.target.value)}

                    /> 
                  
                            <button className="btn btn-block" type="submit" > submit
                                     </button>  

                    </div>
                </form>
        </Wrapper>
    )
}

export default Recharge