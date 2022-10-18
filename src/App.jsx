import React from "react";
import "./App.css";
import Activity from "./components/BodySection/ActivitySection/Activity";
import Body from "./components/BodySection/Body";
import Sidebar from "./components/SidebarSection/Sidebar";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
