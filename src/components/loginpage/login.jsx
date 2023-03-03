import React, { useState,useEffect } from 'react'
import './login.css'


export default function Login(props) {
  
  useEffect(() => {
    document.title = "ho-man | Login";
  }, []);
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
            <p ><a id='forgot' href="https://www.nitandhra.ac.in/student/auth/forgot_password">forgot credentials 😢???</a></p>
        </form>
      </div>
    </>
  )
}
          
