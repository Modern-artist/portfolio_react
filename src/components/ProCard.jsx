import React from "react";
import "../pages/HomeStyle.css";
import image from "../assets/ananta.png";

const ProCard = ({
  title = "Achivements Title",
  about = "Achivements Title",
  link = "https://github.com/Modern-artist/Ananta",
}) => {
  return (
    <div className="ProCard">
      <div className="projectImg">
        <a href="">
          <img src={image} alt="" />
        </a>
        {/* <div className="overlay"></div> */}
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{about}</p>
      </div>
    </div>
  );
};

export default ProCard;
