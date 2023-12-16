import React from 'react';
import {useNavigate} from "react-router-dom";

function Card({ title, age, gender, description, imageUrl, id, nav}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(nav);
    };

    return (
        <a className="card" onClick={handleClick}>
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-subtitle">{age} yo, {gender}</h2>
                <p className="card-description">{description}</p>
            </div>
        </a>
    );
}

export default Card;
