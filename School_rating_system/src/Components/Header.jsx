
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <ul className="nav nav-tabs bg-red-800  justify-center">
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" aria-current="page" to="/">Home</Link>
  </li>
 
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" to="/schoolList">Schools List</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-white font-bold" to="/ourTeam">Our Team</Link>
  </li>
</ul>
    </>
  )
}
