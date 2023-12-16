import React, { useState } from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent.jsx";

function Login({setToken, setId}) {
  return <Parent setToken={setToken} setId={setId}/>;
}
export default Login;
