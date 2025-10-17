import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>

        <h4>About Page Content</h4>
        <nav>
            <Link to='/home'> HomePage |</Link>
            <Link to='/'> Index |</Link>
            <Link to='/contact'> Contacts</Link>
        </nav>
    </div>
  )
}

export default About