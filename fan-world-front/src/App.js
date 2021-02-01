import React from "react";
import TopBar from "./components/TopBar";
import "./style.css"
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";

function App() {
  return (
    <div className="root">
      <Dashboard />
    </div>
  )
}

export default App;
