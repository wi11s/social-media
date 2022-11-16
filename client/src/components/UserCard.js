import React, {useState} from 'react'

export default function UserCard({cardUser, user}) {
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

    // console.log(user.following.map(user => user.id), cardUser.id)

  return (
    <div className='userCard'>
        <div className="card">
            {!!cardUser.avatar ? <img className="card-img-top" src={cardUser.avatar} alt="avatar"/> : <h1>👤</h1>}
            <div className="card-body">
                <h5 className="card-title">{cardUser.username}</h5>
                <p className="card-text">{cardUser.bio}</p>
                <a href="#" className="btn btn-primary" onClick={handleFollowOrUnfollow}>{ buttonToggle ? 'unfollow' : 'follow' }</a>
            </div>
        </div>
    </div>
  )
}
