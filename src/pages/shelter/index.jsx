import React from 'react';
import Cards from "./components/Cards";
import SideBar from "./components/Sidebar";
import ShelterProfile from "./components/ShelterProfile";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function Shelter(){

    // const navigate = useNavigate();

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
                <ShelterProfile/>
                <Cards data={itemsQuery["data"]["data"]["list"]}/>
                <SideBar/>
            </div>
        </div>
    );
}





export default Shelter;

