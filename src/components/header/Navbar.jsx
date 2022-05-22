import React, {useState} from 'react';
import './navbar.css';
import {FaFacebookF} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {GrSkype} from "react-icons/gr";
import {FaLinkedin} from "react-icons/fa";

const Navbar = () => {

    const [isHumburger, setIsHumburger] = useState(false)

    const humburgerClick = () => {
        setIsHumburger(!isHumburger)
    }

    return (
        <div className='container'>
            <div className='navbar'>
                <a href="#" className='nav-branding'><img src="./img/logo.png" alt="logo"/></a>
                <div className={isHumburger ? 'nav-menu active' : 'nav-menu'}>
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">Pages</a>
                    <a href="#" className="nav-link">Feature</a>
                    <a href="#" className="nav-link">Extensions</a>
                    <a href="#" className="nav-link">Tutorials</a>
                    <a href="#" className="nav-link">Contact us</a>
                    <div className="nav-item-icons">
                        <a href="#" className="nav-link"><FaFacebookF /></a>
                        <a href="#" className="nav-link"><FaTwitter /></a>
                        <a href="#" className="nav-link"><GrSkype /></a>
                        <a href="#" className="nav-link"><FaLinkedin /></a>
                    </div>
                </div>

                <div onClick={humburgerClick} className={isHumburger ? 'hamburger active' : 'hamburger'}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;