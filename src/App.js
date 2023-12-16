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

function App() {

    const [token, setToken] = useState("");

  return (
      <>
          <BrowserRouter>
              <Routes path="/">
                  <Route path="/" element={<Landing />} />
                  <Route path="login" element={<Login setToken={setToken}/>} />
                  <Route path="pets" element={<><Nav/><Pets /></>} />
                  <Route path="pets/pet/*" element={<><Nav/><PetProfile /></>} />
                  <Route path="account" element={<><Nav/><Account token={token}/></>} />
                  <Route path="shelter" element={<><Nav/><Shelter /></>} />
                  <Route path="notification" element={<><Nav/><Notification /></>} />
                  <Route path="applications" element={<><Nav/><Applications /></>} />
                  <Route path="*" element={<NotFoundPage />} />
                  <Route path="404" element={<NotFoundPage />} />
              </Routes>
          </BrowserRouter>
          <ReactQueryDevtools></ReactQueryDevtools>
      </>
  );
}

export default App;