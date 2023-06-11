import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav Class="navbar navbar-expand-lg bg-body-tertiary ">
  <div Class="container-fluid">
    <a Class="navbar-brand" href="#">Exam_material.edu</a>
    <button Class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span Class="navbar-toggler-icon"></span>
    </button>
    <div Class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul Class="navbar-nav me-auto mb-2 mb-lg-0">
        <li Class="nav-item">
          <Link Class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li Class="nav-item dropdown">
          <Link Class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Material
          </Link>
          <ul Class="dropdown-menu">
            <li><Link Class="dropdown-item" to="/Computer_Material">Computer</Link></li>
            <li><Link Class="dropdown-item" to="/It_Material">It</Link></li>
            <li><Link Class="dropdown-item" to="/Ict_Material">Ict</Link></li>

          </ul>
        </li>
        <li Class="nav-item dropdown">
          <a Class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Videos
          </a>
          <ul Class="dropdown-menu">
            <li><Link Class="dropdown-item" to="/Computer_Video">Computer</Link></li>
            <li><Link Class="dropdown-item" to="/It_Video">It</Link></li>
            <li><Link Class="dropdown-item" to="/Ict_Video">Ict</Link></li>

          </ul>
        </li>
        <li Class="nav-item">
            <Link to="/events"Class="nav-link active"  >Events</Link>
        </li>
        <li Class="nav-item">
          <Link Class="nav-link active" aria-current="page" to="/contact">Contact</Link>
        </li>
        <Link to='/Profile'>
        <i class="fa-solid fa-user" style={{color:'black'}}></i>
        </Link>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
