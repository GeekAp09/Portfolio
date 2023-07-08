import React from "react";
import "../Navbar.css"

function Navbar () {
  return (
    <>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Akshay</div>
          <span>toogle</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                <li>Home</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Details</li>
                </ul>
            </div>
        </div>
        <button className="button">
            Contact Us
        </button>
      </div>
    </>
  );
}

export default Navbar;
