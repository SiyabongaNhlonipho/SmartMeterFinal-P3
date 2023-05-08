import React, { useEffect } from 'react'
import { useAppContext } from '../Context/appContext.js'
import Wrapper from '../assets/wrappers/DashboardFormPage'

const ListOfUsers = () => {
     const {getAllUsers,Allnames,AlllastNames,Allemails,Alllocations} = useAppContext()

   useEffect(()=>{
            getAllUsers()
   }, [])

  return (
    <Wrapper>
      <form className="form">
    <div>
      
      <h2>List Of Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          <tr> 
            <td>{Allnames[0]}</td>
            <td>{AlllastNames[0]}</td>
            <td>{Allemails[0]}</td>
            <td>{Alllocations[0]}</td>
          </tr>
          <tr> 
            <td>{Allnames[1]}</td>
            <td>{AlllastNames[1]}</td>
            <td>{Allemails[1]}</td>
            <td>{Alllocations[1]}</td>
          </tr>
          <tr> 
            <td>{Allnames[2]}</td>
            <td>{AlllastNames[2]}</td>
            <td>{Allemails[2]}</td>
            <td>{Alllocations[2]}</td>
          </tr>
          <tr> 
            <td>{Allnames[3]}</td>
            <td>{AlllastNames[3]}</td>
            <td>{Allemails[3]}</td>
            <td>{Alllocations[3]}</td>
          </tr>
          <tr> 
            <td>{Allnames[4]}</td>
            <td>{AlllastNames[4]}</td>
            <td>{Allemails[4]}</td>
            <td>{Alllocations[4]}</td>
          </tr>
          <tr> 
            <td>{Allnames[5]}</td>
            <td>{AlllastNames[5]}</td>
            <td>{Allemails[5]}</td>
            <td>{Alllocations[5]}</td>
          </tr>
          <tr> 
            <td>{Allnames[6]}</td>
            <td>{AlllastNames[6]}</td>
            <td>{Allemails[6]}</td>
            <td>{Alllocations[6]}</td>
          </tr>
          <tr> 
            <td>{Allnames[7]}</td>
            <td>{AlllastNames[7]}</td>
            <td>{Allemails[7]}</td>
            <td>{Alllocations[7]}</td>
          </tr>
          <tr> 
            <td>{Allnames[8]}</td>
            <td>{AlllastNames[8]}</td>
            <td>{Allemails[8]}</td>
            <td>{Alllocations[8]}</td>
          </tr>
          <tr> 
            <td>{Allnames[9]}</td>
            <td>{AlllastNames[9]}</td>
            <td>{Allemails[9]}</td>
            <td>{Alllocations[9]}</td>
          </tr>
            <tr> 
            <td>{Allnames[10]}</td>
            <td>{AlllastNames[10]}</td>
            <td>{Allemails[10]}</td>
            <td>{Alllocations[10]}</td>
          </tr>
    
        </tbody>
      </table>
    </div>
 
    </form>
    </Wrapper>
  )
}

export default ListOfUsers
