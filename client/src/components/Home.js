import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Home({user}) {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
  fetch("/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  .then(r => r.json())
  .then(posts => {
    setPosts(posts)
  })
  }, [])

  function handleChange(e) {
    setContent(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        content: content,
        user_id: user.id
      })
    })
    .then(r => r.json())
    .then(post => {
      console.log(post)
      setPosts([...posts, post])
      setContent('')
      setNewPost(false)
    })
  }

  return (
    <div id="posts">
      <button className="btn btn-dark newPostBtn" onClick={() => setNewPost(!newPost)}>New Post</button>
      {newPost ? (
        <form onSubmit={handleSubmit} className='newPost'>
          <input className="form-control" type="text" placeholder="What's on your mind?" onChange={handleChange}/>
          <input className="form-control" type="submit" />
        </form>
      ) : null}
        {posts.map(post => {
          return <Post key={post.id} post={post} user={user}/>
        })}
    </div>
  )
}
