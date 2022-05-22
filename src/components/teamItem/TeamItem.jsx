import React, {useState} from 'react';
import './teamItem.css';

const TeamItem = ({teamItem}) => {

    return (
        <div className="team-item">
            <div className="team-item-bg" style={{background: `url(${teamItem.img})`}}>
                <p className="title-item">{teamItem.name}</p>
            </div>
            <p className="position">{teamItem.position}</p>
        </div>
    );
};

export default TeamItem;