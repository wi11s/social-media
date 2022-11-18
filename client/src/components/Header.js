import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import { motion } from 'framer-motion'

export default function Header({setUser}) {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem("jwt");
    setUser(null);
    navigate("/");
  }
  return (
    <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">Social Media</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <Link className='nav-item' to="/">
              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h6 className="nav-item-text">Home</h6>
              </motion.div>
            </Link>
          <Link className='nav-item' to="profile">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h6 className="nav-item-text">Profile</h6>
            </motion.div>
            </Link>
          <Link className='nav-item' to="search">
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h6 className="nav-item-text">Search</h6>
            </motion.div>
          </Link>
          <button id="logoutButton" onClick={handleClick} className="btn nav-item">
            <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Log Out
            </motion.div>
          </button>
        </div>
    </nav>
  )
}
