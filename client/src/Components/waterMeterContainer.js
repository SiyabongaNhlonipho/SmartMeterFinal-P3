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

const WaterMeterContainer = () => {
  //Fetching Data
    const {getData,sec_Time,sec_createdAt,water_Flow_Rate_in_litres_per_min,outstanding_Balance_in_Rands,water_Consumption_in_litres,isLoading} = useAppContext()

   useEffect(()=>{
            getData()
   }, [])

   
     const handleSubmit = (event) => { 
    event.preventDefault()
   
  var doc = new jsPDF('landscape', 'px','a4', 'false')
    doc.setFont('Helvertica', 'bold')
    doc.text(60,60,'Your Water Meter Statistics')
    doc.setFont('Helvertica', 'Normal')
    doc.text(60,80,'Last Updated On :')
    doc.text(60,100,'Last Updated At :')
    doc.text(60,120,'Time:')
    doc.text(60,140,'Water Consumption in Litres:')
    doc.text(200,160,'Remaining Balance:')
    doc.setFont('Helvertica', 'Normal')
    doc.text(150,80,`${sec_createdAt[0]}`)
    doc.text(150,100,`${sec_Time[0]}`)
    doc.text(100,120,`${sec_Time}`)
    doc.text(220,140,`${water_Consumption_in_litres}`)
    doc.text(300,160,`${outstanding_Balance_in_Rands[0]} R`)

    doc.save('Water Statistics.pdf')
}
     var data = {
      labels: sec_Time,
      datasets: [{
        label: 'Water Consumption in Litres',
        data: water_Consumption_in_litres,
        backgroundColor:[
                      'rgba(118, 215, 196)'
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
        text: 'Water Consumption ( Litres)'
      }
        },
       x: {
          beginAtZero: true,
         
           title: {
        display: true,
        text: 'Time ( hours :min: sec)'
      }
        },
      }
    }
    if(isLoading){
   
        <Loading center />
      
    }

  return (
     <Wrapper>
          <form className="form">
      
            <div >
        <h3>Water meter statistics</h3>
            </div>
          
        <div>
          <Bar 
          data = {data}
          height = {100}
          options = {options}

          />
          </div>
          <div>
             <h4>Outstanding Balance:<code> {outstanding_Balance_in_Rands[0]}R</code></h4>
          </div>
          <div>
             <h4>Last Updated on: {sec_createdAt[0]} </h4>
            <h4>Last Updated At : {sec_Time[0]}</h4>
            <h4>Water Flow Rate Value: {water_Flow_Rate_in_litres_per_min[0]}</h4>

          </div>
           <div style={{textAlign: 'center'}}><br/>
          <button onClick={handleSubmit}>Download Pdf File</button>
            
          </div>
          
      </form>
      </Wrapper>
    
  )
}

export default WaterMeterContainer
