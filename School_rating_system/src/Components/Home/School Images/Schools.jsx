import React from 'react'
import "./style.css" 
import {Link} from 'react-router-dom'
import HoverRating from '../../Rating/HoverRating'
export default function Schools(props) {
  return (
    <div className='flex justify-center items-center '>
      <div className='school'>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        
        <div>
        <HoverRating/>
       
        <button className='bg-red-500 p-2 m-2 rounded border border-gray-300 text-white font-bold '><Link to='/admission'>Admissions</Link></button>


        <button className='bg-green-800 p-2 m-2 rounded border border-gray-300 text-white font-bold '>Details ...</button>
       
        </div>
        
      </div>
      

    </div>
  )
}
