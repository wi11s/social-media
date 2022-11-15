import React, { useState, useEffect } from 'react'

export default function Post({post, user}) {
  console.log(post)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes_count)

  useEffect(() => {
    fetch(`/like/${user.id}/${post.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      if (data) {
        setLiked(true)
      }
    })
  }, [])

  function handleClick() {
    if (liked === false) {
      fetch('likes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
        body: JSON.stringify({
          post_id: post.id,
          user_id: user.id, 
          reply_id: 1
        })
      })
      .then(r => r.json())
      .then(data => {
        setLiked(true)
        let newLikes = likes + 1
        setLikes(newLikes)
      })
    } else
      fetch(`/like/${user.id}/${post.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      .then(() => {
        setLiked(false)
        let newLikes = likes - 1
        setLikes(newLikes)
      })
  }

  return (
    <div className='card'>
      <div className="card-header">
        {post.user.username}
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{post.content}</p>
        </blockquote>
      </div>
      <p>{likes} {likes===1 ? 'like' : 'likes'}</p>
      <button onClick={handleClick}>{liked ? '♥' : '♡'}</button>
    </div>
  )
}
