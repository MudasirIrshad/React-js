import React from 'react'

export default function RuppeDisplay(props) {
  return (
    <div className=''>
        <div className='m-2 bg-white p-2 rounded-xl p-2 bg-opacity-50 shadow-lg'>
        <h1 className='text-xl font-bold'>Remaining Balance</h1>
        <p>{props.income + props.expense} Rs.</p>
            </div>

        <div className='flex space-x-20 bg-white rounded-xl p-2 bg-opacity-50 shadow-lg'>
            <div>
                <p><b>Income</b></p>
                <p>{props.income} Rs.</p>
            </div>
            <div>
                <p><b>Expense</b></p>
                <p>{-1*props.expense} Rs.</p>
            </div>
        </div>
    </div>
  )
}
