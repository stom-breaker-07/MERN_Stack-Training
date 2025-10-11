import React, { useState } from 'react'

function FormValidation() {
    const [email,setEmail]=useState("");
    const [error,setError]=useState("");
    const [number,setNumber]=useState("");
    const [error2,setError2]=useState("");
    

    const handleSubmit=(e)=> {
        e.preventDefault();
        if(!email.includes("@") || email.length<=10){
            setError("Please enter a valid email");
        }else if(number.length != 10){
            setError2("Please enter a valid number");
        }
        else{
            setError("");
            setError2("");
            alert(`Email Submitted : ${email} \nNumber Submitted : ${number}`);
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/> <br/>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button type='submit'>Submit</button>
            {error && <p style={{color:"red"}}>{error}</p>}
            {error2 && <p style={{color:"red"}}>{error2}</p>}
        </form>
    </div>
  )
}

export default FormValidation