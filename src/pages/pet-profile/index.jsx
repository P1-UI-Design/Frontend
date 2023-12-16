import React, {useEffect, useState} from 'react';
import "./style.css";
import SlideShow from "./components/SlideShow";
import Info from "./components/Info";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function PetProfile({Id}){

    const navigate = useNavigate();
    const id = window.location.href.split("/").pop();
    const [petData, setPetData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleAdoptButtonClick = () => {
        navigate(`application/`);
    };

    const imgs = [
        {
            title: 'Pet 2',
            imageUrl: 'https://placedog.net/400/300',
        },
        {
            title: 'Pet 3',
            imageUrl: 'https://placedog.net/400/300',
        },
    ];

    useEffect(() => {
        const fetchPetData = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`http://127.0.0.1:8000/pets/${id}`);
                setPetData(response.data.data); // Adjust according to your actual API response
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching pet details:", error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchPetData();
    }, [id]);

    return (
        <div className="profile-container">
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <div className="slide-container">
                <SlideShow  data={imgs}/>
            </div>
            {petData && (
                <div className="info-container">
                    <Info pet={petData}></Info>
                    {(petData.status === 'available' || "available" ) && (
                        <button onClick={handleAdoptButtonClick}>Adopt Now!</button>
                    )}
                </div>
            )}
        </div>
    );
}

export default PetProfile;
