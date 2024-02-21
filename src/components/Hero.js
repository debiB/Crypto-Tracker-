import React from 'react'
import NavBar from "./navbar"
import Crypto from "../assets/hero-img.png"
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero">
        <div className= "container"> 
        {/* leftside */}
        <div className="left" > 
            <p>Buy and Sell crypto 24/7 using your retirment account</p>
            <h1 className='heroText' >Invest Cryptocurrency with your IRA</h1>
            <p>Buy, Sell, and store hundrends of CryproCurrencies </p>
            <div className= "input-container">
                <input type="email" placeholder="Enter your email" style={{ color: "#eee", marginRight: "10px"}} />
                <button  className="btn">Learn More</button>
            </div>
        </div>
        {/* rightside */}
        <div className = "right">
            <div className = "img-container">
                <img className ="laptop" src={Crypto} alt="image"/>
            </div>

        </div>
        </div>
      
    </div>
  )
}

export default Hero
