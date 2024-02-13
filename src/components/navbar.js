import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './navbarStyle.css'

const Navbar = () => {
const [click, setClick]= useState(false)
const handleClick = () => setClick(!click)
    return (
        <div className='nav_header'>
            <div className='container'>
                <h1>De<span className='primary'>bi</span></h1>
    
                <ul className={click ? "nav-links active": "nav-links"}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Earn</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
            
                <div className='btn-group'>
                    <button className='btn'>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick = {handleClick} >
                    {click ? <FaTimes size={20} style={{color: '#fff'}} /> : <FaBars size={20} style={{color: '#fff'}} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar