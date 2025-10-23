import { useEffect,useRef,useState } from 'react'
import React from 'react'

function UseRef() {
    const[inoputValue,setInputValue]=useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    })  
  return (
    <>
        <p>Type in the input box</p>
        <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
        <h2>Render Count: {count.current}</h2>
        <h2>Input Value: {inoputValue}</h2>
    </>
  )
}

export default UseRef