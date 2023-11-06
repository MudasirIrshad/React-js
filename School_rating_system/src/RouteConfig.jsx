import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import SchoolList from './Components/SchoolList'
import OurTeam from './Components/Our Team/OurTeam'
import Header from './Components/Header'

export default function RouteConfig() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/schoolList' Component={SchoolList}/>
            <Route path='/ourTeam' Component={OurTeam}/>
        </Routes>
      </Router>
    </div>
  )
}
