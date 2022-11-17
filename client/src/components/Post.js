import React, { useState, useEffect } from 'react'
import Replies from './Replies'

export default function Post({post, username, user}) {
  // console.log(post)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes_count)
  const [replyCount, setReplyCount] = useState(post.initial_replies.length)
  const [expand, setExpand] = useState(false)
  const [replies, setReplies] = useState(false)
  const [content, setContent] = useState('')

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

  function handleReplyClick() {
    setReplies(!replies)
  }

  function handleContentChange(e) {
    setContent(e.target.value)
  }

  function handleReplySubmit(e) {
    e.preventDefault()
    fetch('/replies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id,
        post_id: post.id
      })
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      if (data.id) {
        setExpand(true)
        setReplyCount(replyCount => replyCount + 1)
      } else {
        alert("empty post")
      }
    })
  }

  return (
    <div className="post">
      <div className='card'>
        <div className="card-header">
          {username}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p className='postContent'>{post.content}</p>
          </blockquote>
        </div>
        <p onClick={handleExpand}>{likes} {likes===1 ? 'like' : 'likes'} - {replyCount} {replyCount===1 ? 'reply' : 'replies'}</p>
        <button className='btn likeBtn' onClick={handleClick}>{liked ? '♥' : '♡'}</button>
        <button className='btn replyBtn' onClick={handleReplyClick}>💬</button>
        {replies ? (
          <form onSubmit={handleReplySubmit}>
            <input type="text" className="form-control" placeholder="Reply to this post" onChange={handleContentChange}/>
            <input type="submit" className="form-control" value="Post" />
          </form>
        ) : null}
      </div>
      {expand ? <Replies user={user} postId={post.id}/> : null}
    </div>
  )
}
