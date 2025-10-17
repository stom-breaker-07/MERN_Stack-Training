import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h4>Contact Page Content</h4>
        <nav>
            <Link to='/home'> HomePage |</Link>
            <Link to='/about'> About |</Link>
            <Link to='/'> Index</Link>
        </nav>
    </div>
  )
}

export default Contact