import React from 'react';
import "./style.css";
import SlideShow from "./components/SlideShow";
import Info from "./components/Info";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function PetProfile(){
    const id = window.location.href.split("/").pop();
    const imgs = [
        {
            title: 'Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            title: 'Pet 3',
            imageUrl: 'https://placekitten.com/300/200',
        },
    ];

    const itemsQuery = useQuery({
        queryKey: ["pet", id],
        queryFn: getItems
    })

    function getItems(){
        return axios.get("http://127.0.0.1:8000/pets/"+id).then(res => res.data)
    }
    if(itemsQuery.isLoading) return <h1>Loading...</h1>
    if(itemsQuery.isError) return <h1>Error... Have you started the backend?</h1>
    console.log(itemsQuery.data["data"])
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
            <div className="info-container">
                <Info pet={itemsQuery.data["data"]}></Info>
            </div>

        </div>
    );
}

export default PetProfile;