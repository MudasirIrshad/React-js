// import RuppeDisplay from './components/RuppeDisplay'
// import History from './components/History'
import InputPrice from './components/InputPrice'
import './App.css'



function App() {
 
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div className='text-xl bg-gray-300 p-4 rounded '>
        <p className='font-bold text-center'>Welcome to <br />Expense Tracker App</p><hr className='border border-gray-400'/>
        <InputPrice/>
      </div>
    </div>
    
  )
}

export default App
