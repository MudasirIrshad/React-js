import React, { useReducer } from 'react'

import './App.css';
import incDec from './Reducer/incDec';


function App() {
  let [count,dispatch]=useReducer(incDec,0)
  return(
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
    </div>


)
}

export default App;
