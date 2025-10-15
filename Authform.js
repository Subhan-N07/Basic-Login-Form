import React from 'react'
import { useState } from 'react'

const Authform = () => {

  const [islogin, setislogin] = useState(true)

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={islogin ? 'active' : " "} onClick={() => {
            setislogin(true)
          }
          } >Login</button>
          <button className={!islogin ? 'active' : " "} onClick={() => {
            setislogin(false)
          }
          } >Sign up</button>
        </div>
        {islogin ? <>
        <div className='form'>
          <h2>Login Form</h2>
          <input type='email' placeholder='Email'></input>
          <input type='password' placeholder='Password'></input>
          <a href='#'>forgot password?</a>
          <button>Login</button>
          <p>Not a Member? <a href='#' onClick={() => {
            setislogin(false)
          }
          }   >Signup Now</a></p>
        </div>
        </>:
        <div className='form'>
          <h2>Signup Form</h2>
          <input type='email' placeholder='email'></input>
          <input type='password' placeholder='Password'></input>
          <input type='password' placeholder='Confirm Password'></input>
          <button>Signup</button>
        </div>
        }
      </div>
      
    </div>
  )
}

export default Authform
