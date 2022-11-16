import React, { useState, useEffect } from 'react'
import Reply from './Reply'

export default function Replies({postId, user}) {
    const [replies, setReplies] = useState([])
    useEffect(() => {
        fetch(`/posts/replies/${postId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
        .then(r => r.json())
        .then(data => {
            // console.log(data)
            setReplies(data)
        })
    }, [])
  return (
    <div>{replies.map(reply => {
        if (reply !== null) {
            return <Reply user={user} postId={postId} key={reply.id} reply={reply}/>
        }
    })}</div>
  )
}
