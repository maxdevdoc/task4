import React from 'react';
import module from './Login.module.css'
import Button from 'react-bootstrap/Button';


function Login() {
  return (
  <>
      <div className={module.block_enter_login}>
  <h1>Login</h1>
    <div>  
    <input></input>
    <Button>ok</Button>
    </div>
    <div>
    <input></input>
    <Button>ok</Button>
    </div>
    </div>
  </>
  )
}

export default Login;
