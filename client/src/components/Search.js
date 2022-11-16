import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

export default function Search({user}) {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])

  function handleChange(e) {
    console.log(e.target.value)
    setSearch(e.target.value)
  }

  useEffect(() => {
    fetch(`/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setUsers(data.filter(cardUser => cardUser.id !== user.id))
    })
  }, [])

  return (
    <div>
      <h1>Search</h1>
      <form>
        <input className="form-control search" type="text" placeholder="Search" onChange={handleChange}/>
      </form>
      {users.filter(otherUser => otherUser.username.toLowerCase().includes(search.toLowerCase())).map(otherUser => {
        return <UserCard key={otherUser.id} user={user} cardUser={otherUser}/>
      })}
    </div>
  )
}
