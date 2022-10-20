import React from "react";
import Top from "./TopSection/Top";
import Listing from "./ListingSection/Listing";
import Activity from "./ActivitySection/Activity";
import "./body.scss";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />

      <div className="botton flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
