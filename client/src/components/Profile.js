import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Profile({user}) {
  const [updating, setUpdating] = useState(false)
  const [username, setUsername] = useState(user.username)
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState(user.bio)
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

  function handleAvatarChange(e) {
    // console.log(URL.createObjectURL(e.target.files[0]).slice(5))
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
      setUpdating(false)
      setUsername(data.username)
      setBio(data.bio)
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
          <input className="form-control" type="file" name="avatar" onChange={handleAvatarChange}/>
          <input className="form-control" type="submit"/>
        </form>
      ) : (
      <div className="card">
        <img src={user.avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{username}</h5>
          <p className="card-text">{bio}</p>
          <p>{user.followers.length} {user.followers.length===1 ? 'Follower' : 'Followers'}</p>
          <p>{user.following.length} Following</p>
        </div>
      </div>
      )}
    </div>
    <div className='userPostsOnProfile'>
      {posts.map(post => {
        return <Post post={post} username={username} user={user}/>
      })}
    </div>
      <button className='btn btn-secondary' onClick={handleUpdate}>{updating ? 'cancel' : 'update'}</button>
    </div>
  )
}
