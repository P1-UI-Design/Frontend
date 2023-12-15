import React from 'react';
import Card from './Card';

function Cards({ data }) {
    return (
        <div className="card-container">
            {data.map((item) => (
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    description={item.description}
                    age={item.age}
                    gender={item.gender}
                    imageUrl={"https://placedog.net/300/200"}
                />
            ))}
        </div>
    );
}

export default Cards;