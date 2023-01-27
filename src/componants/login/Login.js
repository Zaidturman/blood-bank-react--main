import React from 'react';
import './Login.css'

function Login() {

  return (
     <div className='login-container'>
      <h1>Login</h1>
      <form >
        <label>User Name</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button>Login</button>
      </form>
     </div>
 

  );
}

export default Login;
