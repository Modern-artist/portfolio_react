// importing esscincials

import React, { useEffect } from "react";
import "./HomeStyle.css";
import logo from "../assets/My_project.png";
import NavBar from "../../src/components/NavBar";
import Footer from "../components/footer";
import multiSkill from "../assets/img1.png";
import Service from "../components/Service";
import { SocialIcon } from "../components/SocialIcon";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// importing icons
import { CgScrollV } from "react-icons/cg";
import "aos/dist/aos.css";
import AOS from "aos";
// importing gsap

import { gsap, Tween, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timeline } from "gsap/gsap-core";
import Cards from "../components/Cards";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    gsap.to(".backname", {
      y: 70,
      duration: 3,
      opacity: 0.2,
    });
    gsap.to(".bubble", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".allExp",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".backname", {
      y: 70,
      duration: 3,
      opacity: 0.2,
    });
    gsap.to(".aboutText ", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".aboutText",
        scrub: 1,
        end: "bottom 600px",
      },
    });
    gsap.to(".serCard", {
      boxShadow: "16px 16px 32px #151515, -16px -16px 32px #272727",
      scale: 1.05,
      scrollTrigger: {
        trigger: ".services",
        scrub: 1,
        start: "top 80%",
        end: "bottom 80%",
        ease: Power4.easeInOut,
      },
    });
    gsap.to(".moreText", {
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".aboutText",
        // markers: true,
        scrub: 1,
        end: "bottom 600px",
      },
    });


    const myImg = document.querySelector(".myImg");
    const t1 = new Timeline();
    t1.fromTo(
      myImg,
      0.6,
      { height: "120px", width: "120px" },
      {
        height: "140px",
        width: "140px",
        ease: Power4.easeInOut,
      }
    );
  }, []);

  useEffect(() => {
      AOS.init();
    }, [])
      var cardsDetails = [
        { title: "Form Builder" },
        { title: "GST Calculator" },
        { title: "Rapid Sazam Player" },
        { title: "MUN Command" },
        { title: "EDU - Bird" },
        { title: "Crpyto Infographer" },
      ];


  return (
    <div>
      <div className="loader">
        <span>Working on Mobile mode...</span>
        <img src="" alt="" />
      </div>
      <div className="containar">
        <NavBar />
        <div className="profile">
          <div className="grad">
            <img className="myImg" src={logo} alt="" />
          </div>
          <div className="backname">
            <span>MODERN@rtist</span>
          </div>
          <div className="backnameTwo">
            <span className="hiText">
              HI! THERE <br /> THIS IS PREM.
            </span>
            <br />
          </div>
          <div
            className="heading"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <h1 className="introHead" style={{ lineHeight: "revert" }}>
              I am{" "}
              <span className="tal" style={{ color: "#fdc126", opacity: "1" }}>
                Developer
              </span>{" "}
              <br /> & &nbsp;
              <span className="tal" style={{ color: "#fdc126" }}>
                UI/UX Designer.
              </span>
            </h1>
          </div>
          <SocialIcon />
          <button className="hireBtn">Hire me!</button>
          <div className="boxArw">
            <CgScrollV size={40} color="#fdc126" />
          </div>
          <span className="Scroll">Scroll Down</span>
        </div>
      </div>

      <center>
        {/* <h1 className="subHeading" style={{ marginTop: "40px" }}>
          About me
        </h1> */}
      </center>
      <div className="mainpg">
        <div data-aos="fade-right" className="skillIntro">
          <div className="skillIntroHeading">
            <h1>
              Personal <span style={{ color: "#fdc126" }}>Journey</span> and{" "}
              <span style={{ color: "#fdc126" }}>Passion</span>
            </h1>
          </div>
          <p>
            Hello, I'm Prem Kumar, a versatile UI/UX designer and full-stack web
            developer. With a strong passion for crafting immersive digital
            experiences, I specialize in creating visually stunning interfaces
            that seamlessly merge aesthetics with functionality.<br></br>
            <br></br> My expertise in front-end and back-end development ensures
            that my designs come to life with flawless execution. I'm committed
            to delivering exceptional results that surpass client expectations,
            driven by my unwavering dedication to creating intuitive and
            engaging user journeys.<br></br>
            <br></br>
          </p>
          <button className="resumeBtn">My resume</button>
        </div>
        <div data-aos="zoom-in" className="skillImg">
          <img src={multiSkill} alt="" />
        </div>
      </div>
      <div className="aboutMe">
        <div className="aboutText">
          <h1>UI/UX designer</h1>
          <p>
            I bring a unique blend of creativity, technical expertise, and
            user-centric approach. I understand how to create visually appealing
            interfaces that prioritize seamless functionality, resulting in
            engaging and intuitive user experiences. With my skills, I can help
            elevate your digital products and make them stand out in today's
            competitive marke
          </p>
          <center>
            <SocialIcon />
          </center>
        </div>
        <div className="gooey">
          {/* <h2>
            Hire<br></br> me!
          </h2> */}
        </div>
        <div className="moreText aboutText">
          <h1>Web Developer</h1>
          <p>
            I bring a comprehensive skill set that covers both front-end and
            back-end development. I can seamlessly integrate and connect all
            aspects of your application, ensuring a smooth user experience and
            efficient functionality. With my expertise, I can handle the entire
            development process, from designing and implementing the user
            interface to building scalable server-side architectures.
          </p>
          <center>
            <SocialIcon />
          </center>
        </div>
      </div>
      <div className="serSec">
        <h1 className="subHeading">My Services.</h1>
        <div className="services">
          <Service className="serCard" />
          <Service
            className="serCard"
            title="Front-End"
            img="https://img.freepik.com/premium-vector/serious-concentrated-developer-programming-sites_316839-2216.jpg?w=1800"
            para="Transform designs into pixel-perfect code. Implement intuitive navigation. Elevate user satisfaction."
          />
          <Service
            className="serCard"
            title="Back-End"
            img="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=1800&t=st=1667798586~exp=1667799186~hmac=bdef43767a7f3cf35c900625dfb6993c1a5f47b871ccf492cee31e1c241529be"
            para="Unlock application potential. Craft robust architectures. Ensure performance, data management, and security."
          />
          {/* <Service
            className="serCard"
            title="Graphic Designer"
            img="https://img.freepik.com/free-vector/male-programmer-working-computer-office-wall-with-hanging-reminder-stickers-developer-creating-new-software-interface-coding-programming-system-administrator-designer-character_575670-1159.jpg?w=1800&t=st=1667798586~exp=1667799186~hmac=bdef43767a7f3cf35c900625dfb6993c1a5f47b871ccf492cee31e1c241529be"
            para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              voluptatum quo doloremque maxime sit deserunt."
          /> */}
        </div>
      </div>
      <div className="review" data-aos="fade-right">
        <div className="revhead">
          <div className="reviewAbt">
            <h1>
              What our <span style={{ color: "#fdc126" }}>client</span> <br />{" "}
              Says!
            </h1>
            <p>
              "Prem Kumar surpassed our expectations by showcasing exceptional
              UI/UX skills. With a keen eye for design, they delivered a sleek
              and user-friendly interface that perfectly captured our vision. We
              highly recommend Prem Kumar for their impressive work and ability
              to create engaging digital experiences that leave a lasting
              impact."
            </p>
          </div>
          <div className="bigCard">
            <Cards />
          </div>
        </div>
        <div className="revCards">
          {cardsDetails.map((x) => (
            <Cards title={x.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
