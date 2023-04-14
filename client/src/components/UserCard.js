import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserCard({cardUser, user}) {
    const navigate = useNavigate()
    const [alreadyFollowing, setAlreadyFollowing] = useState(false)
    const [buttonToggle, setButtonToggle] = useState(user.following.map(user => user.id).includes(cardUser.id))

    function handleFollowOrUnfollow() {
        if (buttonToggle) {
            fetch(`/follows/${cardUser.id}/${user.id}`, {
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
                    followed_id: cardUser.id
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setButtonToggle(!buttonToggle)
            })
        }
    }

    function handleClick() {
        navigate(`/profile/${cardUser.id}`)
    }

  return (
    <div className='userCard'>
            <div className="cardInSearch"> 
                {!!cardUser.avatar ? <img onClick={handleClick} className="card-img-top" src={cardUser.avatar} alt="avatar"/> : <h1>👤</h1>}
                <h5 onClick={handleClick} className="card-title">{cardUser.username}</h5>
                <p className="card-text">{cardUser.bio}</p>  
                <a href="#" className="btn btn-primary" onClick={handleFollowOrUnfollow}>{ buttonToggle ? 'unfollow' : 'follow' }</a>
            </div>
    </div>
  )
}
