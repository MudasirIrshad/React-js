import { useState } from "react"
import "./form.css"

export default function forHTMLm(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [address, setAddress]=useState('')
    const [city,setCity]=useState('')
    const [zip,setZip]=useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()
        setIsSubmitted(true)
        
    }
    return(
        <div className="main">
        <div style={{backgroundColor:"white", padding:"10px", margin:"20px", lineHeight:"30px"}}>
            <h2>Form Handling</h2>
        <form>

  <div className="forHTMLm-row">

    <div className="forHTMLm-group col-md-6">
      <label >Email</label>
      <input type="email" className="forHTMLm-control" id="inputEmail4" placeholder="Email" value={email}
      onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>

    <div className="forHTMLm-group col-md-6">
      <label>Password</label>
      <input type="password" className="forHTMLHTMLm-control" id="inputPassword4" placeholder="Password"
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
  </div>

  <div className="forHTMLm-group">
    <label >Address</label><br />
    <input type="text" className="forHTMLm-control" id="inputAddress" placeholder="1234 Main St"
    value={address} 
    onChange={(e)=>{setAddress(e.target.value)}}/>
  </div>

  <div className="forHTMLm-row">
    <div className="forHTMLm-group col-md-6">
      <label >City</label>
      <input type="text" className="forHTMLm-control" id="inputCity"
      value={city} 
      onChange={(e)=>{setCity(e.target.value)}}/>
    </div>

    <div className="forHTMLm-group col-md-2">
      <label >Zip</label>
      <input type="text" className="forHTMLm-control" id="inputZip"
      value={zip} 
      onChange={(e)=>{setZip(e.target.value)}}/>
    </div>
  </div><br />

  <button onClick={handleSubmit}type="submit" className="btn btn-primary" >Sign in</button>
</form>
</div>
<hr />
<h1>Output</h1>
<div style={{backgroundColor:"white"}} className="output">
        {isSubmitted && (
            <table>
            <div>
            <thead>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>City</th>
                <th>Zip</th>
            </thead>
            <tbody>
                <td>{email || "------"}</td>
                <td>{password|| "------"}</td>
                <td>{address || "------"}</td>
                <td>{city || "------"}</td>
                <td>{zip || "------"}</td>
            </tbody>
            </div>
        </table>

        )}
        </div >
</div>
    )
}