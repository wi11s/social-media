import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Profile({user}) {
  const [updating, setUpdating] = useState(false)
  const [username, setUsername] = useState(user.username)
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState(user.bio)
  const [location, setLocation] = useState(user.location)
  const [birthday, setBirthday] = useState(user.birthday)
  const [posts, setPosts] = useState([])
  // console.log(user)

  function handleUpdate() {
    setUpdating(!updating)
  }

  function handleUsernameChange(e) {
    // console.log(username)
    setUsername(e.target.value)
  }

  function handleBioChange(e) {
    setBio(e.target.value)
  }

  function handleLocationChange(e) {
    setLocation(e.target.value)
  }

  function handleBirthdayChange(e) {
    setBirthday(e.target.value)
  }

  function handleAvatarChange(e) {
    
    setAvatar(e.target.value)
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
        avatar: avatar,
        location: location,
        birthday: birthday
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUpdating(false)
      setUsername(data.username)
      setBio(data.bio)
      setLocation(data.location)
      setBirthday(data.birthday)
      setAvatar(data.avatar)
    })
  }
  
 

  useEffect(() => {
    fetch(`/posts/${user.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(r => r.json())
    .then(posts => {
      // console.log(posts)
      setPosts(posts)
    })
    }, [])

  
  return (
    <div>
    <div className="profile">
      {updating? (
        <form onSubmit={handleSubmit} className='updateProfileForm'>
          <input className="form-control" type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange}/>
          <input className="form-control" type="text" name="bio" placeholder="Bio" onChange={handleBioChange} value={bio}/>
          <input className="form-control" type="text" name="location" placeholder="Location" onChange={handleLocationChange} value={location}/>
          <input className="form-control" type="text" name="birthday" placeholder="Birthday" onChange={handleBirthdayChange} value={birthday}/>
          <input className="form-control" type="text" name="avatar" placeholder="profile image URL" onChange={handleAvatarChange}/>
          <input className="form-control" type="submit"/>
        </form>
      ) : (
      <div className="card-profile">
        <img src={user.avatar} className="card-img-profile" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{username}</h5>

          <p className="card-bio">{bio}</p>
          <p className="card-location">{location}</p>
          <p className="card-birthday">{birthday}</p>
          
          <p>{user.followers.length} {user.followers.length===1 ? 'Follower' : 'Followers'}</p>
          <p>{user.following.length} Following</p>
        </div>
      </div>
      )}

      <button className='btn btn-secondary' onClick={handleUpdate}>{updating ? 'cancel' : 'update'}</button>
    </div>
    <div className='userPostsOnProfile'>
      {posts.map(post => {
        return <Post post={post} username={username} user={user}/>
      })}
  
    </div>
    </div>
  )
}
