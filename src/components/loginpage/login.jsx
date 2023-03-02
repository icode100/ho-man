import React, { useState } from 'react'
import './login.css'


export default function Login(props) {
  const [stid,changestid] = useState('');
  return (
    <>
      <div className="container">
        <form className='form' action="">
            <h2 className='h2'>Student Login</h2>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-warning my-3" type="submit"> <ion-icon name="log-in-outline"></ion-icon></button>
        </form>
      </div>
    </>
  )
}
          
