import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <div>
        <h4>Index Page Content</h4>
        <nav>
            <Link to='/home'> HomePage |</Link>
            <Link to='/about'> About |</Link>
            <Link to='/contact'> Contacts</Link>
        </nav>
    </div>
  )
}

export default Index