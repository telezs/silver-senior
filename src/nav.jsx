import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
   <nav className="navbar sticky-top navbar-expand-md" id='nav-bar'>
    <Link to="/" className="navbar-brand">
    <img src="src/assets/logo.png"  alt="Logo" width="40" height="40" className="d-inline-block" />
    <span>Silver Seniors</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to='/mission'>Our Mission</Link>
              <Link className="nav-link" to='/about'>About Us</Link>
              <Link className="nav-link" to='/donate'>Donate</Link>
            </div>
          </div>
   </nav>
  )
}
