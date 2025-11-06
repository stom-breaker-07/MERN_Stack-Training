import React, { useState } from 'react';

import './App.css'
import Table from './Table'
import Model from './Model';

function App() {

  const[popup,setPopup]= useState(false);
  
  const Divstyle = {
  border: "1px solid black",
  borderRadius: "10px",
  boxShadow: "0 0 10px 2px white", 
  textAlign: "center",
};
  

  return (
    <>
     <h1>App</h1>
     {/* <div style={Divstyle}>
       <Table/>
     </div> */}
      <button onClick={() => setPopup(true)} style={{boxShadow: "0 0 10px 2px white"}}>Open Popup</button>
     {popup && (
      <Model Closeit={()=> setPopup(false)}>
         <div
            style={{
              background: "#333",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>PopUp Appeared</h3>
            <button onClick={() => setPopup(false)}>Close</button>
          </div>
     </Model>
     )}
    </>
  )
}
{/* <Model Closeit={()=> setPopup(false)} */}
export default App
