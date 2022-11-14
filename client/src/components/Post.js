import React from 'react'

export default function Post({post}) {
  console.log(post)
  return (
    <div className='card'>
      <div class="card-header">
        username
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>{post.content}</p>
        </blockquote>
      </div>
    </div>
  )
}
