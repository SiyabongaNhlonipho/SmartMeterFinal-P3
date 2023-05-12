import React, { useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { useAppContext } from '../Context/appContext'
import Wrapper from '../assets/wrappers/DashboardFormPage'
import Loading from './Loading'
import jsPDF from 'jspdf'

import { Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
        Legend            
} from 'chart.js'

ChartJS.register(
  CategoryScale,
        LinearScale,
        BarElement,
        Tooltip,
        Legend 
 )

 

const ElectricityMeterContainer =() =>{     
    //Fetching Data
    const {getData,Time,Balance_in_Rands,electricity_Consumption_in_kwh,createdAt,isLoading} = useAppContext()

   useEffect(()=>{
            getData()
   }, [])

   const handleSubmit = (event) => { 
    event.preventDefault()
    
  var doc = new jsPDF('landscape', 'px','a4', 'false')
    doc.setFont('Helvertica', 'bold')
    doc.text(60,60,'Your Electricity Meter Statistics')
    doc.setFont('Helvertica', 'Normal')
    doc.text(60,80,'Last Updated On :')
    doc.text(60,100,'Last Updated At :')
    doc.text(60,120,'Time:')
    doc.text(60,140,'Electricity Consumption in kwh:')
    doc.text(200,160,'Remaining Balance:')
    doc.setFont('Helvertica', 'Normal')
    doc.text(150,80,`${createdAt[0]}`)
    doc.text(150,100,`${Time[0]}`)
    doc.text(100,120,`${Time}`)
    doc.text(220,140,`${electricity_Consumption_in_kwh}`)
    doc.text(300,160,`${Balance_in_Rands[0]} R`)

    doc.save('Electricity Statistics.pdf')
}
   
        

    var data = {
      labels: Time,
      datasets: [{
        label: 'Electricity Consumption in kwh',
        data: electricity_Consumption_in_kwh,
         backgroundColor:[
                      'rgba(52, 152, 219 )'
        ],
        borderWidth: 1
      }]
    }

    var options = {
      maintainAspectRation: false,
      scales: {
        y: {
          beginAtZero: true,
         
           title: {
        display: true,
        text: 'Electricity Consumption ( kwh)'
      }
        },
       x: {
          beginAtZero: true,
         
           title: {
        display: true,
        text: 'Time ( hours :min: sec)'
      }
        },
      
      },
      legend: {
        labels: {
          fontSize: 26
        }
      }
    }

    if(isLoading){
   
        <Loading center />
      
    }
  return (
     <Wrapper>
          <form >
            <div >
        <h3>Electricity meter statistics</h3>
            </div>
          
        <div>
          <Bar 
          data = {data}
          height = {100}
          options = {options}

          />
          </div>

          <div>
            <h4>Remaining Balance:<code> {Balance_in_Rands[0]}R</code></h4>
          </div>
          <div>
            <h4>Last Updated on: {createdAt[0]} </h4>
            <h4>Last Updated At : {Time[0]}</h4>
          </div>
              <div style={{textAlign: 'center'}}><br/>
          <button onClick={handleSubmit}>Download Pdf File</button>
          </div>
      </form>
      </Wrapper>
  )
}

export default ElectricityMeterContainer
