import React, { useEffect,useState } from "react";
import "./Skills.css";
import "aos/dist/aos.css";
import AOS from "aos";
import NavBar from "../../components/NavBar";
import SkillCard from "../../components/SkillCard";
const Skills = () => {
   
  var skillDetails = [
    {
      title: "Figma",
      About:
        "lorem Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    },
    { title: "React JS" },
    { title: "SCSS" },
    { title: "Django" },
    { title: "AI / XD of Adobe" },
    { title: "HTML/CSS" },
    { title: "Tailwind" },
    { title: "Python" },
    { title: "GSAP animations" },
  ];
  const [data, setdata] = useState([])
    let count = 0;

  const addElements = ()=>{
   
    const intv = setInterval(()=>{
      const temp=[];
      temp.push(skillDetails[count])
      setdata(temp)
      count++;
        if (count == skillDetails.length) {
          count = 0;
          clearInterval(intv);
        }
      console.log(data)
     
    },3000)
  }

      useEffect(() => {
        addElements();

        AOS.init();
      }, [data]);
  return (
    <div>
      <NavBar />
      <div className="allSkills">
        {data.map((x, i) => (
          
          <div  data-aos="fade-up"  data-aos-duration={3000*(i+1)} style={{background:"red",margin:"20 20",height:100,width:100}}>
            {/* <SkillCard title={x.title} index={i + 1} About={x.About} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
