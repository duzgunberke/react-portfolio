import React from 'react';
import './Footer.css';
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Dzgn</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.instagram.com/berke.dzgn/'><AiFillInstagram /></a>
        <a href='https://www.linkedin.com/in/berke-d%C3%BCzg%C3%BCn/'><BsLinkedin /></a>
        <a href='https://github.com/duzgunberke'><AiFillGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Dzgn. All rights reserved. 🤗</small>
      </div>
    </footer>
  )
}

export default Footer