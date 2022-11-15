import React, {useState} from 'react'

export default function Reply({reply}) {
    const [liked, setLiked] = useState(false)
    const [expand, setExpand] = useState(false)
    const [nestedReplies, setNestedReplies] = useState([])

    function handleExpand() {
        fetch(`/replies/${reply.id}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
        .then(r => r.json())
        .then(data => {
            console.log(data)
            setNestedReplies(data)
            setExpand(!expand)
        })
    }

    function handleClick() {

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
            <p onClick={handleExpand}>{reply.like_count} {reply.like_count===1 ? 'like' : 'likes'} - {reply.reply_count} {reply.reply_count===1 ? 'reply' : 'replies'}</p>
            <button className='btn likeBtn' onClick={handleClick}>{liked ? '♥' : '♡'}</button>
        </div>
        {expand ? (
            nestedReplies.map(reply => {
                return <Reply key={reply.id} reply={reply}/>
            })
        ) : null } 
    </div>
  )
}
