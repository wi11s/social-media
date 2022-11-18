import React, { useState, useEffect } from 'react'
import Post from './Post'
import { useParams } from 'react-router-dom'

export default function ViewProfile({user}) {
  const params = useParams()
  // console.log(user.following.map(user => user.id).includes(parseInt(params.id)))

  const [updating, setUpdating] = useState(false)
  const [posts, setPosts] = useState([])
  const [userViewing, setUserViewing] = useState({following:{}, followers:{}})
  const [buttonToggle, setButtonToggle] = useState(user.following.map(user => user.id).includes(parseInt(params.id)))
  // console.log(user)

  // console.log(params)

  useEffect(() => {
    fetch(`/users/${params.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(r => r.json())
    .then(user => {
      // console.log(user)
      setUserViewing(user)
    })
    }, [])

  useEffect(() => {
    fetch(`/posts/${params.id}`, {
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

    function handleFollowOrUnfollow() {
      if (buttonToggle) {
        fetch(`/follows/${params.id}/${user.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        .then(() => {
            setButtonToggle(!buttonToggle)
        })
    } else {
        fetch(`/follows`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            },
            body: JSON.stringify({
                follower_id: user.id,
                followed_id: params.id
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setButtonToggle(!buttonToggle)
        })
    }
    }
    console.log(userViewing.following.length, userViewing.followers.length)

  return (
    <div>
    <div className="profile">
      <div className="card">
        <img src={userViewing.avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{userViewing.username}</h5>
          <p className="card-text">{userViewing.bio}</p>
          <p>{userViewing.followers.length} {userViewing.followers.length===1 ? 'Follower' : 'Followers'}</p>
          <p>{userViewing.following.length} Following</p>
        </div>
        <a href="#" className="btn btn-primary" onClick={handleFollowOrUnfollow}>{ buttonToggle ? 'unfollow' : 'follow' }</a>
      </div>
    </div>
    <div className='userPostsOnProfile'>
      {posts.map(post => {
        return <Post post={post} username={userViewing.username} user={userViewing}/>
      })}
    </div>
    </div>
  )
}