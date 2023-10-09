import { useState } from "react"
import './addTask.css'
export default  function Add(){
    const [inputValue,setInputValue]=useState("")
    const [displayValue,setDisplayValue]=useState([])
    const removeMe = (index) => setDisplayValue(displayValue.filter((_, i) => i !== index));
    const handleButton=()=>{
        
        if(inputValue==""){
            alert("plase insert text")
        }
        else{
            setDisplayValue([...displayValue,inputValue]);
        }
        setInputValue('')
    }
    return (
        <>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
            <button id="button" onClick={handleButton}>Add</button>
            <div className="showinput">
            <ul>
                {displayValue.map((item, index) => (
                <>
                
                <li key={index}><button onClick={()=>removeMe(index)}>X</button> {item}</li>
                </>
                ))}
            </ul>
            </div>
            
            
        </>
    )
}