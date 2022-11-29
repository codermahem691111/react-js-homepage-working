import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Heading.css'

function Heading() {
  return (
    <div>
      <nav className="navbar  bg-primary" id='hd'>
        <div className="container-fluid">
          <p className="navbar-brand " id='txt'>Contact:elle-learn410@gmail.com</p>

          <div className="d-flex" role="search">
          
        
            <button className="btn btn-outline-white bg-white" type="submit" id='btn'>Learn With Us</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Heading
