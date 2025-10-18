import React from 'react'

function Login() {
  const handleLogin = () => {
    // Save fake auth token in localStorage
    localStorage.setItem("auth", "true");
    window.location.href = "/dashboard"; // redirect after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

}

export default Login