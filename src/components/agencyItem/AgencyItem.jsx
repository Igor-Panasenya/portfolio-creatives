import React from 'react';
import {BsPencilSquare} from "react-icons/bs";
import './agencyItem.css';

const AgencyItem = ({agencyItem}) => {
    return (
        <div className="agency-item">
            <div className="bg-circle">
                <BsPencilSquare size={40} />
            </div>
            <h4>{agencyItem.title}</h4>
            <p>{agencyItem.body}</p>
        </div>
    );
};

export default AgencyItem;