import React from 'react';
export { ShelterInfo };
const ShelterInfo = ({ shelterName, shelterDescription }) => {
    function onRatingSubmit(number) {
        
    }

    const handleLike = () => {
        onRatingSubmit(1);
    };

    const handleDislike = () => {
        onRatingSubmit(-1);
    };

    return (
        <div className="shelter-info">
            <h1>{shelterName}</h1>
            <div>
                <button onClick={handleLike}>Like</button>
                <button onClick={handleDislike}>Dislike</button>
            </div>
            <p>{shelterDescription}</p>
        </div>
    );
};
