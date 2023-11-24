import themeContext from '../assets/Context/themeContext';

import React, { useState } from 'react'



export default function ToggleTheme() {
    const [theme,setTheme]=useState(true)

    function ToggleTheme(){
      let root=document.getElementById('root')
      if(theme==true){
        root.style.backgroundColor = 'lightgray';
        root.style.color='black'
        root.style.transition = 'background-color 0.5s, color 0.5s'
    }
    else{
        root.style.backgroundColor = 'black';
        root.style.color='white'
        root.style.transition = 'background-color 0.5s, color 0.5s'
  
      }
    }
    return (
      
      <>
  
      <themeContext.Provider value={theme}>
      <button onClick={()=>{
        ToggleTheme()
        setTheme(!theme)
      }
      }
      style={{width:'50px', height:'30px'}}>Theme</button>
      {console.log(theme)}
      </themeContext.Provider>
  
  
     </>
    )
  
}
