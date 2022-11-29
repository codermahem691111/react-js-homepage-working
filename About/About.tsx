import React from 'react'
import Img2 from '../assets/aboutus.svg'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
<div>
  <div className='textcontainer'>
    <h1>About us</h1>
    </div> 
    <div className='Container'>
       <div className='left'>

        <img src={Img2} id='aboutus' alt="" />

       </div>
       <div className='right'>
       <h1>About Us</h1>   
       <p id='pbold'>We aim in providing quality courses that will help in accelerating the progress of your career</p>
       <p>We provide professional courses in all field of studies with best instructors taking each course. This platform aim in providing quality courses needed for you to kickstart your career in tech and also to accelerate your progress.</p>
       <div className='btndiv'> 
      <button  className="morebtn">
               Read more
            </button> 
            </div>
       </div>
    </div>
   </div> 
  )
}

export default About