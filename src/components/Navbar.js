import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=' sticky-top '>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand fw-bold mx-5" to="#">NEWS24/7</Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse px-2" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0 justify-content-between px-5">

            <li className="nav-item"> <Link to="/sports" className="nav-link">Sports</Link></li>
            <li className="nav-item"> <Link to="/technology" className="nav-link">Technology</Link></li>
            <li className="nav-item"> <Link to="/entertainment" className="nav-link">Entertainment</Link></li>
            <li className="nav-item"> <Link to="/health" className="nav-link">Health</Link></li>
            <li className="nav-item"> <Link to="/science" className="nav-link">Science</Link></li>
            <li className="nav-item"> <Link to="/business" className="nav-link">Business</Link></li>


          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
