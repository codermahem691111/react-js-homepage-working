import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1  from '../Images/Icon1.svg'
import './Home.css'
const Home = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-sm bg-light text-dark navbar-light py-3">
  
  <div className="container">
   <img src={Icon1} ></img>
    <button className="navbar-toggler" 
 
    data-bs-toggle="collapse" 
    data-bs-target="#navmenu"
    
    

    
    >
    <span className="navbar-toggler-icon"></span>


     </button>
 
    <div className="collapse navbar-collapse" id="navmenu">
   <ul className="navbar-nav ms-auto">
     <li className="nav-item">
      
      <a href="#Home" className="nav-link">Home</a>
     </li>
     <li className="nav-item">
      <a href="#About Us" className="nav-link">About Us</a>
    </li>
    <li className="nav-item">
      <a href="#Courses" className="nav-link">Courses</a>
    </li>
    <li className="nav-item">
      <a href="#Library" className="nav-link">Library</a>
    </li>
    <li className="nav-item">
      <a href="#Contact" className="nav-link">Contact</a>
    </li>
    <li className="nav-item">
      <a href="#log-in" className="nav-link text-primary">log in</a>
    </li>
   </ul>
   <button className="btn btn-outline-primary mx-4" type="submit">join community</button>
 </div>  
  
  </div>

 </nav>
    
    </div>
  )
}

export default Home
