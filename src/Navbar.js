import React from 'react'
import { Link } from 'react-router-dom'
import './css/App.css'
const Navbar = () => {
  return (
    <header className='navbar'>
      <Link to='/'>
        <h2>Vehicle Registration</h2>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/your-registrations'>Your Registrations</Link>
        </li>
      </ul>
    </header>
  )
}
export default Navbar
