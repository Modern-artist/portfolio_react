// import React from 'react'÷
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const SkillCard = ({
  
  title = "heading",About = "fjed soluta sint sapiente ipsa! Recusandae velit corrupti quisquam excepturi iure vero hic illum quas totam amet", index = "num" }) => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div  className="SkillCard">
      <div className="sNum">
        <span>{index}</span>
      </div>
      <h3>{title}</h3>
      <p>{About}</p>
    </div>
  );
};

export default SkillCard