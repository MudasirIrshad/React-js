import React, { useState } from 'react'
import History from './History'

export default function InputPrice() {
    const [price,setPrice]=useState()
    const [des,setDes]=useState('')
    

    const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (price && des) {
      setExpenses([...expenses, { description: des, price: price }]);
      setPrice();
      setDes('');
    }
  };


  return (
    <div>
        <History expenses={expenses}/>
        <p className='font-bold m-1'> 
            Your Expense
        </p>
    <form 
      onSubmit={(e)=>{
        e.preventDefault();
        addExpense()
        document.getElementById('price').value=null
        document.getElementById('description').value=''
      }} 
      className='bg-gray-800 p-2 text-white'>

      <div>
        <p>Price</p>
        <input type="number"
        id='price' 
        value={price}
        onChange={(e)=>setPrice(e.target.value) }
        className='text-black'
        required
        />

      </div>

      <div>
        <p>Description</p>
        <input type="text"
        id='description' 
        value={des}
        onChange={(e)=>setDes(e.target.value) || ''}
        className='text-black'
        required
        />
      </div>

      <button type='submit'
      className='bg-blue-800 mt-4 p-1 rounded-xl border border-white'>
        Submit
      </button>
    </form>

    </div>
  )
}
