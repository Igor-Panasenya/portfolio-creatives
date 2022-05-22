import React from 'react';
import './header.css';
import Navbar from "./Navbar";
import Banner from "./Banner";

const Header = () => {
    return (
        <header className='header'>
            <Navbar />
            <hr/>
            <Banner />
        </header>
    );
};

export default Header;