import React from 'react';

function Info({ shelter }) {
    // Check if the shelter object is available
    if (!shelter) {
        return <div>No shelter information available.</div>;
    }

    // Destructure the necessary properties from the shelter object
    const { avatar, id, username, description } = shelter;

    return (
        <div className="shelter-info">
            <div className="shelter-avatar">
                {avatar && <img src={avatar} alt={`Avatar of ${username}`} />}
            </div>
            <div className="shelter-details">
                <h2>Shelter ID: {id}</h2>
                <h3>Username: {username}</h3>
                <p>Description: {description}</p>
            </div>
        </div>
    );
}

export default Info;
