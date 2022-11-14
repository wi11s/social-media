import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 

export default function Header({setUser}) {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/");
  }
  return (
    <div id='header'>
        <button id="logoutButton" onClick={handleClick} className="btn btn-danger">Log Out</button>
        <Link to="profile"><button id="profileButton" className="btn btn-primary">Profile</button></Link>
        <Link to="/"><button id="homeButton" className="btn btn-primary">Home</button></Link>
    </div>
  )
}
