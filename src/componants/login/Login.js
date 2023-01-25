import React from 'react';

function Login() {

  return (

    <div>
         <form >
      <div className="login-card shadow">
        
        <div className="mb-2">
          <label htmlFor="username-field">username</label>
          <input
          
            type="text"
            className="form-control"
            name=""
            id="username-field"
            placeholder=""
          />
        </div>

        <div className="mb-2">
          <label htmlFor="password-field">password</label>
          <input
           
            type="password"
            className="form-control"
            name=""
            id="password-field"
            placeholder=""
          />
        </div>

      
        <button type="submit" className="btn btn-login" >login  </button>
  
    </div>
     </form>
    </div>
  );
}

export default Login;
