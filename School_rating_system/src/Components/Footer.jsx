import './footer.css'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>

<div className='divIndiv'>

      <div className='pr-10'> 
        <a href="Email: mudasirirshad@gmail.com">Email: mudasirirshad@gmail.com</a>
        <p>Contact: 0335-2009891</p>
        <p>MUDASIR IRSHAD</p>
      </div>
      <div className='pr-10'>
    
        <a href="Email: mudasirirshad@gmail.com">Email: harismughal@gmail.com</a>
        <p>Contact: 0335-2009891</p>
        <p>Haris Mughal</p>
      </div>
</div>

     <div>
      
        <li className="nav-item">
      <Link className="font-bold p-4" aria-current="page" to="/">Home</Link>
    </li>
    <li>
      <Link className="font-bold p-4" to="/schoolList">Schools</Link>
    </li>
    <li className="nav-item">
      <Link className="font-bold p-4" to="/ourTeam">About Us</Link>
    </li>
     </div>
  </div>
  )
}
