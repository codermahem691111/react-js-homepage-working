import React from 'react'
import './card.css'
import Imgc from '../Images/unplash2.jpg'
import Stars from '../Images/stars.svg'
const Card = () => {
  return (
    <div className='bodycontainer'>
       <div className='cardcontainer'>
        <div className="part1">
        <div className="imgcontainer">
            <img src={Imgc} className='Imgc'
             alt="" />  
        </div>
        <div className="textcontainer">
            <div className="line1">
             <h5 className='hd1' >C Programming: Zero to Hero</h5>
              <img src={Stars} className='stars' alt="" />
            </div>
            <div className="line2">
                <p className='p1'>Instructor:[Maheem Shahreear]</p>
            </div>

            <div className="line3">
                <p className='p1'>$37.43</p>
            </div>
            <div className="line4">
                <p className='p1'>38  hours total. 258 lectures. All levels</p>
            </div>
            <div className="line5">
            <button  className="btnl5">Buy Course</button> 
               <p className='p1'>153k enrolled</p>
            </div>
        </div>
       </div> 
    <div className="part2"> 
        <div className="gol1"></div>
        <div className="gol2"></div>
    </div>
        </div>  
    </div>
  )
}

export default Card