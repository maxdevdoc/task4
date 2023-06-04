import React from 'react';
import Button from 'react-bootstrap/Button';
import module from './registration.module.css'

function Registrtion() {
  return (
  <>
  <div className={module.block_enter_register}>
  <h1>Registration</h1>
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

export default Registrtion;
