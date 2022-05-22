import React from 'react';
import './agency.css';
import {useState} from "react";
import {BsPencilSquare} from "react-icons/bs";
import AgencyItem from "../agencyItem/AgencyItem";

const Agency = () => {

    const [agencyItems, setAgencyItems] = useState([
        {
            id: '1',
            title: 'FEATURE ONE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus'
        },
        {
            id: '2',
            title: 'FEATURE TWO',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus'
        },
        {
            id: '3',
            title: 'FEATURE THREE',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus'
        },
        {
            id: '4',
            title: 'FEATURE FOUR',
            body: 'Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus'
        },
    ])

    return (
        <section className="hero-agency">
            <div className="container">
                <div className="__W">
                    <h2>We Are An Awesome Agency</h2>
                </div>
                <div className="content-cards">
                    {agencyItems.map((agencyItem) =>
                        <AgencyItem agencyItem={agencyItem} key={agencyItem.id}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Agency;