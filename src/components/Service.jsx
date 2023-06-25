import React from "react";
import "aos/dist/aos.css";

export default function Service({
  title = "UI/UX Designer",
  img = "https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=2000&t=st=1667797691~exp=1667798291~hmac=c77befcd2c8b304dc274d0eafc45fa3f55209b3c69988706df65397e5afb16e0",
  para = "  Boost user satisfaction and engagement with my expert UI/UX services. I craft visually stunning interfaces that prioritize seamless functionality.",
  buttonText = "Learn More",
  btnUrl = "some url",
}) {
  return (
    <div className="serviceCard serCard">
      <h2>{title}</h2>
      <img src={img} alt="" />
      <p>{para}</p>
      <a href="/Project">
        <button>{buttonText}</button>
      </a>
    </div>
  );
}
