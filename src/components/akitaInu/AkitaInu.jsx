import React from 'react';
import './akitaInu.css';

const AkitaInu = () => {
    return (
        <section className="hero-akita-inu">
            <div className="container">
                <div className="akita-inu-content">
                    <h4>Akita Inu Dog</h4>
                    <p>Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Donec sed odio dui.
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor
                    </p>
                    <div className="akita-card">Fully Responsive Design</div>
                    <div className="akita-card">High Quality Code</div>
                    <div className="akita-card">Different Headers & Layout</div>
                </div>

                <img className="akita-inu-photo" src="img/akita-inu-photo.png" alt="phone" />
            </div>
        </section>
    );
};

export default AkitaInu;