import React from 'react';
import './banner.css';
import { BsArrowDownCircle } from 'react-icons/bs';

const Banner = () => {
    return (
        <section className="container">
            <h1>Creatives</h1>
            <p className="link-text">Power by PSDfreebies.com</p>
            <div className="btn-scroll-down">
                <p>Scroll Down</p>
                <a href="#contact"><BsArrowDownCircle size={50} className="btn-down" /></a>
            </div>
        </section>
    );
};

export default Banner;