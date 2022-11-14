import React, { useState, useEffect } from 'react'
import Post from './Post'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
  fetch("/posts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`
    }
  })
  .then(r => r.json())
  .then(posts => setPosts(posts))
  }, [])

  return (
    <div>
        {posts.map(post => {
          return <Post key={post.id} post={post}/>
        })}
    </div>
  )
}
