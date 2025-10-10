import React from 'react'

function SecoundComponent(chinmay){
    return(
         <div>SecoundComponent {chinmay.phno}</div>
    )
}

function FirstComponent(props) {
  return (
    <>
        <h1>First Component File {props.name}</h1>
        <SecoundComponent phno = "8183456387"/>
    </>
  )
}


export default FirstComponent