import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SheltersPage() {
    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/accounts/shelter/")
            .then(res => {
                setShelters(res.data.data); // Assuming the data comes in res.data.data
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="shelters-page">
            {shelters.map(shelter => (
                <div key={shelter.id} className="shelter">
                    <Link to={`/shelter/${shelter.id}`}>
                        <img src={shelter.avatar} alt={shelter.username} />
                        <p>ID: {shelter.id}</p>
                        <p>Name: {shelter.username}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SheltersPage;
