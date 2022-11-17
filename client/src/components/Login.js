import React, {useState} from 'react'
import { motion, useTime, useTransform } from "framer-motion";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [signup, setSignup] = useState(false)

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: username, 
        password: password 
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.user) {
        localStorage.setItem("jwt", data.token);
        onLogin(data);
      } else {
        alert(data.message)
      }
      
    })
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }

  function handlePasswordConfirmationChange(e) {
    setPasswordConfirmation(e.target.value)
  }

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email, 
        username: username, 
        password: password, 
        password_confirmation: passwordConfirmation
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      if (data.user) {
        localStorage.setItem("jwt", data.token);
        onLogin(data);
      } else {
        alert(data.message)
      }
    })
  }


  return (
    <div id="login">
      <motion.div 
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
      {signup ? (
        <div className="signUpForm">
          <form onSubmit={handleSignupSubmit}>
            <div className='form-group'>
              <input className='form-control' type='text' placeholder='username' onChange={handleUsernameChange}/>
              <input className='form-control' type='text' placeholder='full name' onChange={handleNameChange}/>
              <input className='form-control' type='text' placeholder='email' onChange={handleEmailChange}/>
            </div>
            <div className='form-group'>
              <input className='form-control' type='password' placeholder='password' onChange={handlePasswordChange}/>
              <input className='form-control' type='password' placeholder='password' onChange={handlePasswordConfirmationChange}/>
            </div>
            {password===passwordConfirmation ? (
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                <button id='loginSubmit' className="btn btn-primary" type='submit'>Sign Up</button>
              </motion.div>
            ) : <p>Passwords do not match</p>}
          </form>
          <p className='loginText'>Already have an account?</p>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button className="btn btn-primary" onClick={() => setSignup(!signup)}>Log In</button>
          </motion.div>
        </div>
      ) : (
        <div className="signUpForm">
          <form className="signUpForm" onSubmit={handleSubmit}>
            <div className='form-group'>
              <label for="exampleInputEmail1">Username</label>
              <input className='form-control' type='text' placeholder='username' onChange={handleUsernameChange}/>
            </div>
            <div className='form-group'>
              <label for="exampleInputPassword1">Password</label>
              <input className='form-control' type='password' placeholder='password' onChange={handlePasswordChange}/>
            </div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button id='loginSubmit' className="btn btn-primary" type='submit'>Login</button>
            </motion.div>
          </form>
          <p className='loginText'>Don't have an account?</p>
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button className="btn btn-primary" onClick={() => setSignup(!signup)}>Sign Up</button>
          </motion.div>
        </div>
        )}
        </motion.div>
    </div>
  )
}
