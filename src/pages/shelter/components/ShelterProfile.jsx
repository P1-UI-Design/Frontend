import Comment from './subComponents/Comment'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideBar from "../../pets/components/Sidebar";

const ShelterProfile = () => {
    const { id } = useParams();
    const [shelterData, setShelterData] = useState(null);
    const [error, setError] = useState('');
    const [rate, setRate] = useState(0);

    let user1Id = 1;

    useEffect(() => {
        const viewProfileLoad = {
            'viewee_pid': id
        };

        axios.post(`http://127.0.0.1:8000/accounts/${user1Id}/`, viewProfileLoad)
            .then(response => {
                setShelterData(response.data.message);
                setRate(response.data.message.rate);
            })
            .catch(err => {
                setError(err.message);
            });
    }, [id, user1Id]);

    const updateRate = (newRate) => {
        const viewRate = {
            'rate': newRate
        };

        axios.patch(`http://127.0.0.1:8000/accounts/${id}/`, viewRate)
            .then(response => {
                setRate(newRate);
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {shelterData && (
                <div>
                    {/* Display shelter data */}
                    <h1>{shelterData.name}</h1>
                    <img src={shelterData.avatar} alt={shelterData.name} />
                    <p>ID: {shelterData.id}</p>
                    <p>Description: {shelterData.description}</p>
                    <p>Rating: {rate}</p>
                    {/* Button to update rate */}
                    <button onClick={() => updateRate(rate + 1)}>Rate Up</button>
                    <Comment/>
                </div>
            )}
        </div>
    );
};

export default ShelterProfile;
