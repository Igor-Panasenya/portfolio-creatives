import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section id='contact' className="hero-contact">
            <div className="container">
                <div className="__C">
                    <h2>We’d love to hear about your project.</h2>
                </div>

                <div className="forms">
                    <input className="form-input" type="text" placeholder="Name" required />
                    <input className="form-input" type="text" placeholder="E-mail" required />
                    <input className="form-input" type="text" placeholder="Phone" required />
                    <textarea className="form-input __message" type="text" placeholder="Message" required></textarea>
                </div>
                <a className="btn-submit" href="#">SUBMIT</a>
            </div>
        </section>
    );
};

export default Contact;