import { useState } from 'react'

import "./color.css"

export default function Change_color(){
    const [color, setColor]=useState("white")
    

    return(
        <>
        <div style={{backgroundColor:color, height:"100vh", width:"100vw"}}>
            
        <div style={{backgroundColor:"white", display:"flex",width:"60vw",justifyContent:"center",margin:"0 20vw",height:'50px',padding:".5rem",borderRadius:"10px"}}>

        <button onClick={()=>{
                setColor("black")
            }} ><strong className='black'>Black</strong></button>

            
        <button onClick={()=>{
                setColor("red")
            }} ><strong className='red'>Red</strong></button>
        
        
        <button onClick={()=>{
                setColor("magenta")
            }} ><strong className='pink'>Pink</strong></button>
        
        <button onClick={()=>{
                setColor("blue")
            }} ><strong className='blue'>Blue</strong></button>
        
        <button onClick={()=>{
                setColor("yellow")
            }} ><strong className='yellow'>Yellow</strong></button>

<button onClick={()=>{
                setColor("green")
            }} ><strong className='green'>Green</strong></button>

<button onClick={()=>{
                setColor("cyan")
            }} ><strong className='cyan'>Cyan</strong></button>

        

        </div>            
            
        </div>
        </>
    )
}