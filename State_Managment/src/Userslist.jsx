import React, { useEffect, useState } from 'react'
import './Userlist.css'

const Userslist = () => {
    const [loading,setLoading] =useState(true);
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            const res=await fetch("https://fakestoreapi.com/products");
            const data =await res.json();
            setUsers(data);
            setLoading(false);
        }
        fetchData();
    },[])
  return (
    <div>
       <h2>Users List</h2>
       {loading ? (
        <p>Loading....</p>
       ) : (
        <ul className='main'>
            {users.map((user) => (
               <div className="Card"  key={user.id}>
                 <h4><u>Product</u> : {user.title}</h4>
                  <p>Price : {user.price}</p>
                  <img src={user.image} style={{height:"200px",width:"200px"}} />
                  <button >Add to Cart</button>
               </div>
            ))}
        </ul>
       )}
    </div>
  )
}

export default Userslist