import React from 'react'
import { useState } from 'react'
import "./App.css"
// import Showimage from './Showimage.jsx'
// import LoginPage from './LoginPage.jsx'
// import Todo from './Todo.jsx'
import Posts from '../Post'
import {QueryClient , QueryClientProvider} from "@tanstack/react-query"

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  const client = new QueryClient();

  return (
    <>
      {/* {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Showimage />
      )} */}
      {/* <Todo /> */}
      <QueryClientProvider  client={client}>
        <Posts/>
      </QueryClientProvider>
    </>
  )
}

export default App