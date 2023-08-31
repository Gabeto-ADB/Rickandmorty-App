import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

<div>
  <header className="p-0 bg-dark text-white">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="me-3">
            <img
              className="App-logo-nav"
              height="10"
              src="egg.png"
              alt="logo-giratorio"
            />
          </span>
          <ul className="nav me-auto mb-2 mb-md-0">
            <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" className="nav-link px-2 text-white">About</a></li>
          </ul>
        </div>
        
        <form className="d-flex">
          <input type="search" className="form-control form-control-dark me-2" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-light" type="button">Search</button>
        </form>
        
        <div className="text-end">
          
          <button  type="button" className="btn btn-warning">
          <Link to={`/user-form/`} className="nav-link px-2 text-secondary">Login</Link>
          </button>
        </div>
      </div>
    </div>
  </header>
</div>

  )
}

export default NavBar
