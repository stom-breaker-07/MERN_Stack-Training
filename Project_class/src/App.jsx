import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import FirstComponent from './FirstComponent.jsx'
// import Parent from './PropChilderen.jsx'
// import  ClassResult from './ConditonRendering.jsx'
// import Cars from './LogicalOperators.jsx'
// import Car1 from './Destructing.jsx'
// import Car2 from './Desturcting2'
import Parent from './Propdrilling.jsx'

function App() {

  return (
    <>
     {/* <h1>App . Js</h1>
     <FirstComponent name="Prop1"/>
     <FirstComponent name="Prop2"/>
     <FirstComponent  name="Prop3"/> 
     <Parent/>
     <ClassResult isresult={false}/>
     <Cars brand="Shelby Mustang GT500"/>
     <Car1 color="Red"/>
     <Car2 brand="Shelby" model="Mustang GT500" color="red" year={1969}/>
     */}

     <Parent studentName="John Doe"/>
    </>
  );
}

export default App
