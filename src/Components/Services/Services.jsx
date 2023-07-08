import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'

function Services() {
  return (
    <div className='services'>
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur,
                <br/>
                 adipisicing elit. Praesentium est nemo
            </span>
            <button className='button s-button'>Check CV</button>
            <div className="blur s-blurl" style={{background:"#ABF1FF94"}}></div>
            </div>
            <div className="cards">
                I am the right side
                </div>
    </div>
  )
}

export default Services