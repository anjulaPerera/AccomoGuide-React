import React from "react";
import NavBar from "./NavBar";
import bg from "../vendors/images/bg.jpg";
import "../vendors/styles/welcomepage.css"

const Landing: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="hero">
        {/* <img src={bg} alt="" className="homeBg"/> */}
        

        <div className="content">
          <h1>AccomoGuide</h1>
          <br></br>

          <h2>Find the Accommodation | List your Accommodation</h2>
          <br></br>

          <a href="/login">Get Start</a>
          <a href="/signup">Landlord</a>
        </div>
      </div>
    </>
  );
};

export default Landing;
