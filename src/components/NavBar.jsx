import React, { useState,useEffect } from "react";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdLightMode, MdNightlight } from "react-icons/md";
import "./NavBar.css";
import logo from "../assets/logo.png";
import { gsap, Tween, Power4 } from "gsap";
import SplitType from "split-type";

const NavBar = () => {
  const [isResponsive, setResponsive] = useState(false);
  // const toggleNavbar = () => {
  //   console.log("hello");
  //   setResponsive(!isResponsive);
  // };
  useEffect(() => {
       
    let mytext = new SplitType(".logoChar");
    gsap.to(mytext.chars, {
      y: "0%",
      duration: 2,
      stagger: 0.2,
      delay: 0.1,
    });

    // const ham = document.getElementById('ham')
    // const togglenavlnk = document.getElementById("togglenavlnk");

    // ham.addEventListener('click', () => {
    //   togglenavlnk.className("viewTogglenavlnk");
    // })

    const body = document.getElementsByTagName("body")[0];
    const light = document.getElementById("light");
    const dark = document.getElementById("dark");

    light.addEventListener("click", () => {
      light.classList.remove('active');
      dark.classList.add('active');
      body.classList.add("light");
      gsap.to(".serviceCard", {
        boxShadow: "18px 18px 36px #c9c9c9, -18px -18px 36px #ffffff",
        scale: 1.05,
        scrollTrigger: {
          trigger: ".services",
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
          ease: Power4.easeInOut,
        },
      });
    })
   
    // function toggleNavbar() {
    //   var navbar = document.getElementById("togglenavlnk");
    //   if (navbar.className === "navlinks") {
    //     navbar.className += " responsive";
    //   } else {
    //     navbar.className = "navlinks";
    //   }
    // }
    dark.addEventListener("click", () => {
      dark.classList.remove("active");
      light.classList.add("active");
      body.classList.remove("light");
      gsap.to(".serviceCard", {
        boxShadow: "12px 12px 24px #131313, -12px -12px 24px #292929",
        scale: 1.05,
        scrollTrigger: {
          trigger: ".services",
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%",
          ease: Power4.easeInOut,
        },
      });
    });

  }, []);


  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
          <h1 className="logoChar">Dev</h1>
        </Link>
        <div className="navlinks" id="togglenavlnk">
          <Link to="/AllAchivements">Achivements</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Project">Projects</Link>
        </div>
        <div className={`responsive ${isResponsive ? "vis" : ""}`}>
          <Link to="/AllAchivements">Achivements</Link>
          <Link to="/Skills">Skills</Link>
          <Link to="/Project">Projects</Link>
        </div>
        <div className="theme">
          <MdLightMode color={"#fdc126"} id="light" className="mode active" />
          <MdNightlight id="dark" className="mode" />
        </div>
        <div
          className="hamBurger"
          id="ham"
          onClick={() => setResponsive(!isResponsive)}
        >
          <FaBars size={28} color={"#c6c6c6"} />
        </div>
      </nav>
      {/* <div className="cursor"></div>
      <div className="cursor2"></div> */}
    </header>
  );
};

export default NavBar;
