import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { id } = useParams();
  return (
    <div>
        <h2>User Id : {id}</h2>
    </div>
  )
}

export default User