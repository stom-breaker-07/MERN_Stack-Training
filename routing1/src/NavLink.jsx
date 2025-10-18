import React from 'react'
import {NavLink} from 'react-router-dom' 

function NavBar() {
  return (
    <div>
        <NavLink to="/about" style={({isActive})=>({
            color: isActive ? 'red' : 'blue',
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
        })}>About Us</NavLink>
    </div>
  )
}

export default NavBar