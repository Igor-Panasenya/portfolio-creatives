import React from 'react';
import './team.css';
import {useState} from "react";
import TeamItem from "../teamItem/TeamItem";

const Team = () => {

    const [teamItems, setTeamItems] = useState([
        {
            id: '1',
            name: 'JOHN SNOW',
            position: 'CEO',
            img: '../img/photo-team-1.jpg',
        },
        {
            id: '2',
            name: 'EGOR BROWN',
            position: 'WebDesigner',
            img: '../img/photo-team-2.jpg',
        },
        {
            id: '3',
            name: 'DAVID SMITH',
            position: 'Photographer',
            img: '../img/photo-team-3.jpg',
        },
        {
            id: '4',
            name: 'LADY SANSA',
            position: 'Photographer',
            img: '../img/photo-team-4.jpg',
        },
    ])

    return (
        <section className="container">
            <div className="__T">
                <h2 style={{color: 'black'}}>Our Team</h2>
            </div>

            <p className="blog-content">Sales long tail influencer pitch release
                niche market.
            </p>


            <div className="content-cards">



                {teamItems.map((teamItem) =>
                    <TeamItem teamItem={teamItem} key={teamItem.id}/>
                )}




            </div>
        </section>
    );
};

export default Team;