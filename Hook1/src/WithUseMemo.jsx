import React,{useState,useMemo} from 'react'

function WithUseMemo() {
    const [count,setCount]=useState(0);
    function slowCalculation(num){
        console.log('Calling Slow Calculation');
        for(let i=0;i<=1000000000;i++){}
        return num*2; 
    }

    const result=useMemo(()=>slowCalculation(count),[count]);
  return (
    <>
     <h3>Slow result {result}</h3>
        <button onClick={()=>setCount(count+1)}>Increment Count {count}</button>
    </>
  )
}

export default WithUseMemo