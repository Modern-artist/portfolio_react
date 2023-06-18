import React from "react";
import { Link } from "react-router-dom";

// const Cards = ({title="Card Title",details="some details"}) => {
const EachAch = ({
  title = "Achivements Title",
  about = "Achivements Title",
  details = "some details",
  index = 0,
}) => {
  return (
    <div>
      <div className={`achBlocks ${index % 2 == 1 ? "rev" : ""}`}>
        <div className="achHeadImg">
          <div className="achHeading">
            <span>{title}</span>
          </div>
          <div className="achImg"></div>
        </div>
        <div className="AboutAchive">
          <div className="AboutAchiveInfo">
            <h2>About Achivement.</h2>
            <span>{about}</span>
          </div>

          <center>
            {/* <button  onClick={}> */}
            <Link className="viewAchBtn" to="/Achivement">
              Projects
            </Link>
            {/* </button> */}
          </center>
        </div>
      </div>
    </div>
  );
};

export default EachAch;
