import React from "react";
import "../pages/HomeStyle.css";

const ProCard = ({
  title = "Achivements Title",
  about = "Achivements Title",
  link = "https://github.com/Modern-artist/Ananta",
  imgName = "ananta.png",
}) => {
  return (
    <div className="ProCard">
      <div className="projectImg">
        <a href={link} target="/">
          <img src={require(`../assets/${imgName}`)} alt="" />
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
