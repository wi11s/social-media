import React from 'react'

export default function Login() {
  return (
    <div>
        <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}
