import React from 'react';
import './pets-style.css';
import Cards from "./components/Cards";
import SideBar from "./components/Sidebar";
import {useQuery} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Pets({token, Id}) {
    // const handleScroll = () => {
    //     const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight
    //     if (bottom)
    //         alert("sdjnansjdn");
    // }
    //
    // React.useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, {
    //         passive: true
    //     })});
    const petsData = [
        {
            id: 1,
            name: 'Pet 1',
            description: 'Description for Pet 1',
            imageUrl: '',
        },
        {
            id: 2,
            name: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            name: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            name: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            name: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            name: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
    ];
    const navigate = useNavigate();

    const itemsQuery = useQuery({
        queryKey: ["pet-listings"],
        queryFn: getItems
    })

    function getItems(){
        return axios.get("http://127.0.0.1:8000/pets/").then(res => res.data)
    }
    if(itemsQuery.isLoading) return <h1>Loading...</h1>
    if(itemsQuery.isError) return <h1>Error... Have you started the backend?</h1>

    return (
        <div className="pets-page">
            <div className="main-content">
                <Cards data={itemsQuery["data"]["data"]["list"]}/>
                <SideBar/>
            </div>
        </div>
    );
}

export default Pets;
