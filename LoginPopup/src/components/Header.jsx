import React from 'react'

function Header() {
  return (
    <>
        <div className=' bg-gray-400 text-2xl flex flex-wrap justify-between p-2 rounded-xl'>
           <h1 className=' text-white font-bold  '>LOGO</h1>
           <button className=' pr-1.5  text-white font-bold bg-gray-600 p-1 rounded-md'>Login</button>
        </div>
    </>
  )
}

export default Header