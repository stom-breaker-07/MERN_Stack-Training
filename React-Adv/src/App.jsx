import React from 'react'
import { useState } from 'react'
import "./App.css"
// import Showimage from './Showimage.jsx'
// import LoginPage from './LoginPage.jsx'
// import Todo from './Todo.jsx'
// import Posts from '../Post'
import CounterSlice from './Countersslice'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"
import { Provider } from 'react-redux'
import StoreApp from './StoreApp'
import store from '../Store'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  const client = new QueryClient();
  const [showImage,setShowImage]=useState(true);

  return (
    <>
      {/* {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Showimage />
      )} */}
      {/* <Todo /> */}
      {/* <QueryClientProvider  client={client}>
        <button className=' p-2 rounded-2xl bg-blue-500 ' onClick={()=>setShowImage((prev)=>!prev)}>{showImage ? "Hide Images" : "Show Images"}</button>
       {showImage && <Posts/>}
       <ReactQueryDevtools/>
      </QueryClientProvider> */}
      
       <Provider store={store}>
          <StoreApp/>
       </Provider>
    </>

  )
}

export default App