import React from 'react'

function Pass() {
  return (
    <div>Congradulations !!</div>
  )
}

function Fail() {
  return (
    <div>Better Luck Next Time !!</div>
  )
}

function Check(props){
    const isresult =props.isresult;
    if(isresult==="True"){
        return <Pass/>;
    }else{
        return <Fail/>;
    }
}
export default Check