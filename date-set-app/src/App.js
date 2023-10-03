import Date from './compnents/date';
import './App.css';
import { useState } from 'react';
function App() {
  let [mode,setMode]=useState(true)
  return (
    <div className={`${!mode ? "night":"light"} `}>
      <button onClick={()=>{setMode(!mode)}}>mode</button>
      <Date/>
    </div>
  );
}

export default App;
