import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import HtmlForm from './HtmlForm'
// import ControlledForm from './ControlledForm'
// import TwoWayBinding from './TwoWayBinding'
import FormValidation from './FormValidation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>App Page</h1>
     {/* <HtmlForm/> */}
     {/* <ControlledForm/> */}
     {/* <TwoWayBinding/> */}
     <FormValidation/>
    </>
  )
}

export default App
