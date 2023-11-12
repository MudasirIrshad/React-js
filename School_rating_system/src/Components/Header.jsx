
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <ul className="nav text-lg nav-tabs bg-blue-700  justify-center p-3">
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" aria-current="page" to="/">Home</Link>
  </li>
 
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" to="/schoolList">Schools</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" to="/ourTeam">About Us</Link>
  </li>
</ul>
    </>
  )
}
