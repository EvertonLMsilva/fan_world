import React from "react";
import TopBar from "./components/TopBar";
import "./style.css"
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import Layout from "./view/Layout";

function App() {
  return (
    <div className="root">
      <Layout />
    </div>
  )
}

export default App;
