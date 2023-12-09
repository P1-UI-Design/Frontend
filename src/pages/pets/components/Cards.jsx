import React from 'react';
import Card from './Card';

function Cards({ data }) {
    return (
        <div className="card-container">
            {data.map((item) => (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            ))}
        </div>
    );
}

export default Cards;