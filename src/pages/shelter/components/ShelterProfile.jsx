import axios from 'axios';
import React, {useState} from 'react';

const ShelterProfile = () => {
    const [user2Id, setUser2Id] = useState('');
    const [shelterData, setShelterData] = useState(null);
    const [error, setError] = useState('');
    const [rate, setRate] = useState(0);

    let user1Id = 1;
    const viewProfileLoad = {
        'viewee_pid': user2Id
    };

    const handleSubmit = () => {
        axios.post(`http://127.0.0.1:8000/accounts/${user1Id}/`, viewProfileLoad)
            .then(response => {
                setShelterData(response.data.message);
                setRate(response.data.message.rate);
            })
            .catch(err => {
                setError(err.message);
            });
    };

    const updateRate = () => {
        const newRate = rate + 1;
        const viewRate = {
            'rate': newRate
        };
        axios.patch(`http://127.0.0.1:8000/accounts/${user2Id}/`, viewRate)
            .then(response => {
                setRate(response.data.newRate); // Update rate state based on the response
                handleSubmit(); // Re-fetch the shelter data to update the UI
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
    };


    return (
        <div>
            <h1>Shelter Profile</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}>
                <input
                    type="text"
                    value={user2Id}
                    onChange={(e) => setUser2Id(e.target.value)}
                    placeholder="Enter User 2 ID"
                />
                <button type="submit">Submit</button>
            </form>
            {shelterData && (
                <div>
                    <h2>Shelter Data</h2>
                    <p>ID: {shelterData.id}</p>
                    <p>Username: {shelterData.username}</p>
                    <p>Role: {shelterData.role}</p>
                    <p>Description: {shelterData.description ? shelterData.description : 'N/A'}</p>
                    <p>Rate: {rate}</p>
                    <button onClick={updateRate}>Like</button>
                </div>
            )}
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default ShelterProfile;
