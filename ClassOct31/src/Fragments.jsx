import React from 'react'
import { Fragment } from 'react'

function Fragments() {
  return (
    <div style={{borderRadius:'5px'}}>
        <div style={{borderRadius:'5px' ,backgroundColor:"Black" ,padding:'4px'}}>
            <h3>Chinmay L</h3>
            <p>Fullstack Developer</p>
        </div>
       <Fragment>
         <div style={{borderRadius:'5px' ,backgroundColor:"Black" ,padding:'4px'}}>
            <h3>John Doe</h3>
            <p>Fullstack Developer</p>
        </div>
       </Fragment>
    </div>
  )
}

export default Fragments