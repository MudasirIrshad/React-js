import RuppeDisplay from "./RuppeDisplay";

export default function History({ expenses }) {


  const prices = expenses.map(expense => Number(expense.price));

  let totalIncome = 0
  let totalExpense=0
  for(let i in prices) {
    if(prices[i]>0){
      totalIncome+=prices[i]
    }
    else if(prices[i]<0){
      totalExpense+=prices[i]
    }
  }
console.log(totalExpense);

  let detail=expenses.map((expense, index) => (
    <div key={index} className='bg-white m-2 p-2 rounded flex space-x-10'>
      <li className='mr-auto '>{expense.description}</li>
      <li className='text-right'>{expense.price}</li>
    </div>
  ))

  return (

    <div>


<RuppeDisplay income={totalIncome} expense={totalExpense}/>

      <p className='font-bold m-1'>History</p>
      <ul className='bg-gray-800 p-2 rounded'>
        {detail}
      </ul>
    </div>
  );
}