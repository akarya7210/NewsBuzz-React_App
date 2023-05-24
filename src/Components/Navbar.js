import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg " style={{
      backgroundColor: "#2d3436",
      backgroundImage: "linear-gradient(180deg, #2d3436 0%, #000000 74%)",
    }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-white">NewsBuzz</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"> <Link to="/general" className="nav-link navButton" aria-current="page">Home</Link></li>
            <li className="nav-item"> <Link to="/business" className="nav-link navButton">Business</Link></li>
            <li className="nav-item"> <Link to="/entertainment" className="nav-link navButton">Entertainment</Link></li>
            <li className="nav-item"> <Link to="/health" className="nav-link navButton">Health</Link></li>
            <li className="nav-item"> <Link to="/science" className="nav-link navButton">Science</Link></li>
            <li className="nav-item"> <Link to="/sports" className="nav-link navButton">Sports</Link></li>
            <li className="nav-item"> <Link to="/technology" className="nav-link navButton">Technology</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
