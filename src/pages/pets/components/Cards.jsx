import React from 'react';
import Card from './Card';

function Cards({ data }) {
    return (
        <div className="card-container">
            {data.map((item) => (
                <Card
                    key={item.id}
                    title={item.name}
                    description={item.description}
                    imageUrl={"https://placekitten.com/300/200"}
                />
            ))}
        </div>
    );
}

export default Cards;