import React from "react";
import { BsLinkedin,BsInstagram } from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/berke-d%C3%BCzg%C3%BCn/"
        target="_blank"
      >
        <BsLinkedin></BsLinkedin>
      </a>
      <a
        href="https://github.com/duzgunberke"
        target="_blank"
      >
          <AiFillGithub></AiFillGithub>
      </a>
      <a
        href="https://www.instagram.com/berke.dzgn/"
        target="_blank"
      >
          <BsInstagram></BsInstagram>
      </a>
    </div>
  );
};

export default HeaderSocials;
