import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'

const Navbar = ({ onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
      <div className='nav-right'>
        <button className='logout-btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar
