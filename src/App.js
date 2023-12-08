import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './pages/landing/index.jsx';
import Login from './pages/login/index.jsx';
import Pets from './pages/pets/index.jsx';
import Account from './pages/account/index.jsx';
import Nav from './Navigation.js'
import './App.css';
import Shelter from "./pages/shelter";
import NotFoundPage from "./pages/404page";

function App() {
  return (
      <>
          <BrowserRouter>
              <Nav>
              </Nav>
              <Routes path="/">
                  <Route path="/" element={<Landing />} />
                  <Route path="login" element={<Login />} />
                  <Route path="pets" element={<Pets />} />
                  <Route path="account" element={<Account />} />
                  <Route path="shelter" element={<Shelter />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;