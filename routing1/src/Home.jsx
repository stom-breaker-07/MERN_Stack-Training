import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
      const navigate=useNavigate();
  return (
    <div>
        <h4>Home Page Content</h4>
        <div>
            <button onClick={()=>{
                console.log("Home Page Button was Clicked");
                navigate('/about');
            }}>Click</button>
        </div>
    </div>
  )
}

export default Home