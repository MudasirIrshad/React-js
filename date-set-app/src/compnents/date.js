import React,{useState} from 'react';
import './date.css'
export default function Date(){
    let [month,setMonth]=useState(1)
    let [day,setDay]=useState(1)
    let [year,setYear]=useState(2000)

    return(
        <div>
        <button onClick={()=>{
            if(month>=12){
                alert('total number of months are 12')
            }
            else{
                setMonth(month+1)
            }}}>add month</button> 
            <button onClick={()=>{
            if(day>=31){
                alert('total number of days are 31')
            }
            else{
                setDay(day+1)
            }}}>add day</button>
            <button onClick={()=>setYear(year+1)}>add month</button>


        <h1>{month} / {day} / {year}</h1>

        
        <button onClick={()=>{
            if(month<=1){
                alert('month cant be 0')
            }
            else{
                setMonth(month-1)
            }}}>sub month</button>
        <button onClick={()=>{
            if(day<=1){
                alert('days cant be 0')
            }
            else{
                setDay(day-1)
            }}}>sub day</button>
            <button onClick={()=>setYear(year-1)}>sub year</button>           
        </div>
    )
}