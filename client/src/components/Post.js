import React, { useState, useEffect } from 'react'
import Replies from './Replies'

export default function Post({post, user}) {
  // console.log(post)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes_count)
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    fetch(`/like/${user.id}/${post.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
    .then(r => r.json())
    .then(data => {
      // console.log(data)
      if (data) {
        setLiked(true)
      }
    })
  }, [localStorage.getItem("jwt")])

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
          user_id: user.id
        })
      })
      .then(r => r.json())
      .then(data => {
        console.log(data)
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

  function handleExpand() {
    setExpand(!expand)
  }

  return (
    <div className="post">
      <div className='card'>
        <div className="card-header">
          {post.user.username}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{post.content}</p>
          </blockquote>
        </div>
        <p onClick={handleExpand}>{likes} {likes===1 ? 'like' : 'likes'} - {post.replies_count} {post.replies_count===1 ? 'reply' : 'replies'}</p>
        <button className='btn likeBtn' onClick={handleClick}>{liked ? '♥' : '♡'}</button>
      </div>
      {expand ? <Replies user={user} postId={post.id}/> : null}
    </div>
  )
}
