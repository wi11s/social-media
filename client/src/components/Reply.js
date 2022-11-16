import React, {useState, useEffect} from 'react'

export default function Reply({reply, user}) {
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(reply.like_count)
    const [expand, setExpand] = useState(false)
    const [nestedReplies, setNestedReplies] = useState([])
    console.log(reply.id, user.id)

    function handleExpand() {
        fetch(`/replies/${reply.id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            // console.log(data)
            setNestedReplies(data)
            setExpand(!expand)
        })
    }

    useEffect(() => {
        fetch(`/like/reply/${user.id}/${reply.id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        })
        .then(r => r.json())
        .then(data => {
        //   console.log(data)
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
                reply_id: reply.id,
                user_id: user.id, 
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
            fetch(`/like/reply/${user.id}/${reply.id}`, {
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
    <div className='replyDiv'>
        <div className='card replyCard'>
            <div className="card-header">
                {reply.user.username}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{reply.content}</p>
                </blockquote>
            </div>
            <p onClick={handleExpand}>{likes} {likes===1 ? 'like' : 'likes'} - {reply.reply_count} {reply.reply_count===1 ? 'reply' : 'replies'}</p>
            <button className='btn likeBtn' onClick={handleClick}>{liked ? '♥' : '♡'}</button>
        </div>
        {expand ? (
            nestedReplies.map(reply => {
                return <Reply key={reply.id} user={user} reply={reply}/>
            })
        ) : null } 
    </div>
  )
}
