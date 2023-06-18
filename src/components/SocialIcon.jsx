import React from 'react'
import { Link } from "react-router-dom";
import { FiDribbble } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialIcon = () => {
  return (
    <div className="expSocialMedia">
      <Link to="https://dribbble.com/Modern_Artist" target="blank">
        <FiDribbble size={40} color="#707070" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/prem-kumar-2a0500211/"
        target="blank"
      >
        <FaLinkedin size={40} color="#707070" />
      </Link>
      <Link to="https://github.com/Modern-artist" target="blank">
        <FaGithub size={40} color="#707070" />
      </Link>
      <Link to="https://www.instagram.com/modern.a.r.t.i.s.t/" target="blank">
        <FaInstagram size={40} color="#707070" />
      </Link>
    </div>
  );
}
