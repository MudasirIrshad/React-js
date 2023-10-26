
import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  
  
  const [length, setLength]=useState(8)
  
  
  const [numberAllowed, setNumberAllowed]=useState(false)
  
  
  const [charAllowd, setCharAllowd]=useState(false)
  
  
  const [password, setPassword]=useState("")

  const passwordRef=useRef(null)
  const clickButtonRef=useRef(null)
  const passwordGenerator=useCallback(()=>{


    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str+="0123456789"
    if(charAllowd) str+="!#$%&{|~"


    for(let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowd,setPassword])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowd,passwordGenerator])
  

  const copyPassowrdToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    
    window.navigator.clipboard.writeText(password)
  },[password])
  const clickButtonChange=()=>{
    if(clickButtonRef.current){
      clickButtonRef.current.classList.toggle('bg-red-500')
    }
  }
  return ( 
    <>
    <div className=' m-2 w-full max-w-md mx-auto text-white shadow-md rounded-xl px-4 my-8 text-center p-4 bg-gray-700'><h1 className='text-xl text-white  '>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input 
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 text-orange-500'
      placeholder='Passowrd'
      readOnly
      ref={passwordRef}
      />
      <button
      className='bg-blue-500 text-white outline-none px-3 py-0.5 shrink-0 h-10'
      onClick={()=>{
        copyPassowrdToClipboard();clickButtonChange()
      }}
      
      ref={clickButtonRef}
      >Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={8}
        max={20}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        />
        <label htmlFor=""> Numbers</label>
      </div>
      <div>
        <input type="checkbox"
        defaultChecked={charAllowd}
        id='charInput'
        onChange={()=>{
          setCharAllowd((prev)=>!prev)
        }}
        />
        <label htmlFor=""> Characters</label>
      </div>
    </div>
    </div>


    
    </>
  )
}

export default App
