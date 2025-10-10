import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent.jsx'
import Parent from './PropChilderen.jsx'
import Check from './ConditonRendering.jsx'

function App() {

  return (
    <>
     {/* <h1>App . Js</h1>
     <FirstComponent name="Prop1"/>
     <FirstComponent name="Prop2"/>
     <FirstComponent  name="Prop3"/> 
     <Parent/>
     */}

     <Check/>
    </>
  
  )
}

export default App
