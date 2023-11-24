
import './App.css'
import Card from './component/Card'
import ToggleTheme from './component/ToggleTheme'

function App() {
  return( 
    <div style={{display:'flex', alignItems:'center' , flexDirection:'column'}}>
    <ToggleTheme/>
    <Card/>
    
    </div>
  )
 }

export default App
