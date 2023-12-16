import React, { useState } from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent.jsx";

function Login({setToken}) {
  return <Parent setToken={setToken}/>;
}
export default Login;
