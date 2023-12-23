import React from 'react'
import Footer from '../Footer'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { useState } from "react"
import "./form.css"





export default function Admission(){
    const [studentName,setstudentName]=useState('')
   
    const [fatherName, setfatherName]=useState('')
    const [fatherOccupation,setfatherOccupation]=useState('')
    const [schoolAdmission,setschoolAdmission]=useState('')
    const [className,setclassName]=useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

  
    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsSubmitted(true)
         alert("Confirm the detail Bellow in Result Section")
        
    }
    const confirmation=(e)=>{
      e.preventDefault()
      setstudentName('')
      setfatherName('')
      setfatherOccupation('')
      setschoolAdmission('')
      setclassName('')
      setIsSubmitted(false)
       alert("Admission Form Submitted")
      
  }
    return(
    <div >
        <div className="admissionForm">
        <div className="main">
                
        <div className='bgform'>
            
        <form>

  <div>

    <div >
      <label >Student Name</label>
      <input type="text" className="forHTMLm-control" id="inputEmail4" placeholder="Student Name" value={studentName}
      onChange={(e)=>{setstudentName(e.target.value)}}/>
    </div>
  </div><br />

  <div>
    <label >Father Name</label><br />
    <input type="text" className="forHTMLm-control" id="inputAddress" placeholder="Father Name"
    value={fatherName} 
    onChange={(e)=>{setfatherName(e.target.value)}}/>
  </div><br />

  <div >
    <div>
      <label >Father Occupation</label>
      <input type="text" className="forHTMLm-control" id=""
      value={fatherOccupation} placeholder='Doctor, Engineer, Driver etc.'
      onChange={(e)=>{setfatherOccupation(e.target.value)}}/>
    </div><br />
    <div>
      <label >Class</label>
      <input type="text" className="forHTMLm-control" id=""
      placeholder='Nursery, One, Two etc ...'
      value={className} 
      onChange={(e)=>{setclassName(e.target.value)}}/>
    </div>
  <br />

    <div>
      <label >School For Admission</label>
      <input type="text" className="forHTMLm-control" id=""
      value={schoolAdmission} 
      placeholder='Islamia Model, St Francis etc ...'
      onChange={(e)=>{setschoolAdmission(e.target.value)}}/>
    </div>
  </div><br />
 
  <button className='bg-blue-700 p-1 border w-40' onClick={handleSubmit }type="submit" >Apply</button>
</form>
</div>
<hr />

<div  className="output">
        {isSubmitted && (
          
          <div className="table-container">
          <h1 className='text-white text-sm mb-4'>Confirmation</h1>
          <div className="table-wrapper">
            <table>
              <thead className='text-sm'>
                <tr>
                  <th>Student Name</th>
                  <th>Father Name</th>
                  <th>Father Occupation</th>
                  <th>Class Name</th>
                  <th>School For Admission</th>
                </tr>
              </thead>
              <tbody className='text-xs'>
                <tr>
                  <td>{studentName || "------"}</td>
                  <td>{fatherName || "------"}</td>
                  <td>{fatherOccupation || "------"}</td>
                  <td>{className || "------"}</td>
                  <td>{schoolAdmission || "------"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className='bg-blue-700 p-1 border w-40 text-white' onClick={confirmation}>Confirm</button>
        </div>
        

        ) }
        </div >
            </div>
</div>

<Footer/>
</div>
    )
}