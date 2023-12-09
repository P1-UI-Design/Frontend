import React from 'react';
import "./style.css";
import SlideShow from "./components/SlideShow";
import Info from "./components/Info";

function PetProfile(){
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
                <Info></Info>
            </div>

        </div>
    );
}

export default PetProfile;