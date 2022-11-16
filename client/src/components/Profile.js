import React, { useState } from 'react'

export default function Profile({user}) {
  const [updating, setUpdating] = useState(false)
  const [username, setUsername] = useState('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  console.log(user)

  function handleUpdate() {
    setUpdating(!updating)
  }

  function handleUsernameChange(e) {
    setUsername(e.target.value)
  }

  function handleBioChange(e) {
    setBio(e.target.value)
  }

  function handleAvatarChange(e) {
    console.log(URL.createObjectURL(e.target.files[0]).slice(5))
    setAvatar(URL.createObjectURL(e.target.files[0]).slice(5))
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        username: username,
        bio: bio,
        avatar: avatar
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }
  return (
    <div>
      {updating? (
        <form onSubmit={handleSubmit} className='updateProfileForm'>
          <input className="form-control" type="text" name="username" placeholder="Username" value={user.username} onChange={handleUsernameChange}/>
          <input className="form-control" type="text" name="bio" placeholder="Bio" onChange={handleBioChange} value={user.bio}/>
          <input className="form-control" type="file" name="avatar" onChange={handleAvatarChange}/>
          <input className="form-control" type="submit"/>
        </form>
      ) : (
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
        {user.following.map(follow => {
          return <h2>{follow.username}</h2>
        }
        )}
      </div>
      )}
      <button className='btn btn-secondary' onClick={handleUpdate}>{updating ? 'cancel' : 'update'}</button>
    </div>
  )
}
