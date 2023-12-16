// import React from 'react';
// import ShelterProfile from "./components/ShelterProfile";
// import {useQuery} from "@tanstack/react-query";
// import axios from "axios";
// import Info from "./components/Info";
//
// function Shelter(){
//
//     const processShelterData = (data) => {
//         const shelters = [];
//         for (let i = 0; i < data.length; i += 4) {
//             shelters.push({
//                 avatar: data[i],
//                 id: data[i + 1],
//                 username: data[i + 2],
//                 description: data[i + 3],
//             });
//         }
//         return shelters;
//     };
//
//     const itemsQuery = useQuery({
//         queryKey: ["shelter-listings"],
//         queryFn: getPets
//     })
//
//     function getPets() {
//         return axios.get("http://127.0.0.1:8000/accounts/shelter/")
//             .then(res => {
//                 console.log("API Response:", res.data); // Log the response for debugging
//                 return res.data;
//             });
//     }
//     if(itemsQuery.isLoading) return <h1>Loading...</h1>
//     if(itemsQuery.isError) return <h1>Error... Have you started the backend?</h1>
//
//
//     return (
//         <div className="pets-page">
//             <div className="main-content">
//                 <ShelterProfile/>
//             </div>
//             <div className="info-container">
//                 {itemsQuery.data && itemsQuery.data["data"] ?
//                     processShelterData(itemsQuery.data["data"]).map(shelter =>
//                         <Info key={shelter.id} shelter={shelter}></Info>
//                     ) :
//                     <p>No shelter data available</p>
//                 }
//             </div>
//         </div>
//     );
// }
//
// export default Shelter;
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
