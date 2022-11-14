import React from 'react'

export default function Profile({user}) {
  console.log(user)
  return (
    <div>
      <img src={user.avatar}/>
      <h2>
        Username: {user.username}
      </h2>
      <h2>
        Email: {user.email}
      </h2>
      <h2>
        Bio: {user.bio}
      </h2>
    </div>
  )
}
