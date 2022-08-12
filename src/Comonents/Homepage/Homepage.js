import React from "react";
import Searchpage from "../Searchpage/Searchpage";
import "./Homepage.css";

function Homepage() {
  return (
    <div>
      <div className="firstblock">
        <h1 className="Text">
          <strong>Stunning free images & royalty free stock</strong>
        </h1>
        <img
          className="image"
          src="https://cdn.pixabay.com/photo/2022/07/26/03/31/sea-7344974_1280.jpg"
          alt="Opening"
        />

        <h4 className="Text2">
          Over 2.6 million+ high quality stock images by our talented community.
        </h4>
      </div>
      <Searchpage className />
    </div>
  );
}

export default Homepage;
