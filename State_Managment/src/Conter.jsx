import React, { useEffect, useState } from 'react'

function Conter() {
    const [count ,setCount] = useState(0);
    const [decount ,setDecount] = useState(1000);
    useEffect(()=>{
        console.log("count is changed");
    },[count,decount])
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Clicked me {count} times</button>
        <button onClick={()=>{setDecount(decount-1)}}>don't {decount}</button>
    </div>
  )
}

export default Conter