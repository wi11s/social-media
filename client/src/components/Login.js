import React, {useState} from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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
      localStorage.setItem("jwt", data.token);
      onLogin(data);
    })
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }


  return (
    <div id="login">
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label for="exampleInputEmail1">Username</label>
            <input className='form-control' type='text' placeholder='username' onChange={handleUsernameChange}/>
          </div>
          <div className='form-group'>
            <label for="exampleInputPassword1">Password</label>
            <input className='form-control' type='password' placeholder='password' onChange={handlePasswordChange}/>
          </div>
          <button id='loginSubmit' className="btn btn-primary" type='submit'>Login</button>
        </form>
    </div>
  )
}
