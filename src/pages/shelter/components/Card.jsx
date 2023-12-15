import React from 'react';

function Card({ title, age, gender, description, imageUrl, onClick, id }) {
    return (
        <a href={"/pets/pet/" + id.toString()} className="card" onClick={onClick}>
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
