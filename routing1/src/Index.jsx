import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavLink'

function Index() {
  return (
    <div>
        <h4>Index Page Content</h4>
        <NavBar/>
        <nav>
            <Link to='/home'> HomePage |</Link>
            <Link to='/about'> About |</Link>
            <Link to='/contact'> Contacts</Link>
        </nav>
    </div>
  )
}

export default Index