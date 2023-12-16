import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Landing from './pages/landing/index.jsx';
import Login from './pages/login/index.jsx';
import Pets from './pages/pets/index.jsx';
import Account from './pages/account/index.jsx';
import Nav from './Navigation.js'
import './App.css';
import Shelter from "./pages/shelter";
import NotFoundPage from "./pages/404page";
import Notification from "./pages/notification";
import PetProfile from "./pages/pet-profile";
import Applications from "./pages/applications";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import PetApplication from "./pages/pet-application/PetApplication";
import ShelterProfile from "./pages/shelter/components/ShelterProfile";
import ShelterAccount from "./pages/shelter-account/SheltetAccount";
import NewPet from "./pages/shelter-account/NewPet";
import Favorite from "./pages/favorites/Favorite";

function App() {

    const [token, setToken] = useState("");
    const [Id, setId] = useState("");

    return (
      <>
          <BrowserRouter>
              <Routes path="/">
                  <Route path="/" element={<Landing />} />
                  <Route path="login" element={<Login setToken={setToken} setId={setId}/>} />
                  <Route path="pets" element={<><Nav/><Pets token={token} Id={Id}/></>} />
                  <Route path="pets/:id" element={<><Nav/><PetProfile Id={Id} token={token}/></>} />
                  <Route path="pets/:id/application/" element={<><Nav/><PetApplication Id={Id}/></>} />
                  <Route path="account" element={<><Nav/><Account token={token}/></>} />
                  <Route path="shelter/account" element={<><ShelterAccount token={token}/></>} />
                  <Route path="newpet" element={<NewPet token={token}/>} />

                  <Route path="shelter" element={<><Nav/><Shelter /></>} />
                  <Route path="notification" element={<><Nav/><Notification /></>} />
                  <Route path="applications" element={<><Nav/><Applications /></>} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="404" element={<NotFoundPage />} />
                  <Route path="favorite" element={<><Nav/><Favorite token={token} Id={Id}/></>} />
              </Routes>
          </BrowserRouter>
          <ReactQueryDevtools></ReactQueryDevtools>
      </>
  );
}

export default App;