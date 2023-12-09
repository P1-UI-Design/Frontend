import React, { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "./AuthFormStyles.css";

const Parent = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="parent-container">
      {showLogin ? (
        <>
          <Login />
          <button onClick={() => setShowLogin(false)} className="toggle-button">
            Don't have an account? Register!
          </button>
        </>
      ) : (
        <>
          <Register setShowLogin={setShowLogin}/>
          <button onClick={() => setShowLogin(true)} className="toggle-button">
            Go to Login
          </button>
        </>
      )}
    </div>
  );
};

export default Parent;
