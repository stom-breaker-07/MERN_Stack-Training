import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
     {/* <Link to="/users/1">User 1 |</Link>
     <Link to="/users/2"> User 2 |</Link>
     <Link to="/users/3"> User 3 |</Link>
     <Link to="/users/4"> User 4 |</Link>
     <Link to="/users/5"> User 5</Link> */}
     <Link to='/home'>Home |</Link>
     <Link to='/about'> About |</Link>
     <Link to='/contact'> Contact</Link>
    </div>
  )
}

export default Navbar