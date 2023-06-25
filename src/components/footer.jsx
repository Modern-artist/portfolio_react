import React from 'react'
import { SocialIcon } from "../components/SocialIcon"; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footAbt">
        <h4 className="footSubHead">About Me</h4>
        <p>
          Thank you for visiting! I'm Prem Kumar, a versatile UI/UX designer and
          full-stack web developer dedicated to creating exceptional digital
          experiences. With a keen eye for aesthetics and a focus on seamless
          functionality, I strive to deliver innovative solutions that captivate
          and engage users.
        </p>
        <SocialIcon />
      </div>
      <div className="footExp">
        <div className="footDis">
          <h4 className="footSubHead">Explore</h4>
          <span>
            Feel free to reach out to me to discuss your design and development
            needs. You can connect with me through the following channels:
          </span>
          <span>Email: premgameworld@gmail.com</span>
          <span>Phone: +91 9142874743</span>
          <span>Portfolio: https://modernartist.netlify.app/</span>
        </div>
      </div>
      <div className="footCont">
        <h3>Contact me &#10084;</h3>
        <div className="inputs">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <input type="textarea" rows="4" cols="100" placeholder="Message" />
          <center>
            <button type="submit">SEND</button>
          </center>
        </div>
      </div>
      <center>
        <div className="footerText">
          Let's collaborate and bring your vision to life! © 2023 Prem Kumar.
          All rights reserved.
        </div>
      </center>
    </div>
  );
}

export default Footer