import React, { useEffect , useState } from 'react'

function Cleanup() {
    const [secounds,setSecounds]=useState(0);
    useEffect(()=>{
        const timer =setInterval(()=>{
            setSecounds((s)=>s+1);
        },1000);
        //clean function
        return ()=>{
            clearInterval(timer);
            console.log("Timer cleard !");
        };
    },[]);
  return <h2>Time : {secounds} s</h2>
}

export default Cleanup