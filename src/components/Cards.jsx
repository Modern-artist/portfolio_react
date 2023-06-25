import React from 'react'
import { SiFreelancer } from "react-icons/si";

const Cards = ({title="Solarways",details="some details"}) => {
  return (
    <div className="review-card ">
      <div className="client">
        <h2 className="">{title}</h2>
        <span>NOIDA UTTARPRADESH | INDIA</span>
      </div>
      <p>
        "This developer excels in both development and UI/UX, combining
        technical expertise with a keen eye for user experience. Their ability
        to create seamless and visually appealing interfaces, while delivering
        robust and efficient code, makes them a valuable asset for any project
        requiring exceptional development and UI/UX skills. Highly recommended."{" "}
      </p>
      <div className="rating">
        <span>&#11089; &#11089; &#11089; &#11089; &#11089;</span>
      </div>
      <div className="abtClient">
        <div className="clientName">
          <img
            src="https://i.pinimg.com/564x/7a/e7/43/7ae743e5b7ca2a8b3b547ddde1586388.jpg"
            alt=""
          />
          <span>Solarwayz Co</span>
        </div>
        <p>
          <SiFreelancer size={30} />
        </p>
      </div>
    </div>
  );
}

export default Cards