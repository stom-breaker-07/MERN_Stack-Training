import React from 'react'

function Pass() {
  return (
    <div>Congradulations !!  this is Pass component</div>
  )
}

function Fail() {
  return (
    <div>Better Luck Next Time !! this is Fail component</div>
  )
}

// function Check(props){
//     const isresult =props.isresult;
//     if(isresult==="True"){
//         return <Pass/>;
//     }else{
//         return <Fail/>;
//     }
// }
 
function ClassResult(props){
  const isresult =props.isresult;
  console.log(isresult);
  return(
    <>
      {isresult ? <Pass/> : <Fail/>}
    </>
  );
}
export default ClassResult