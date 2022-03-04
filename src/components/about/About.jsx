import React from 'react';
import './About.css';
import ME from '../../assets/me2.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderActive} from 'react-icons/vsc';

const About=()=> {
  return (
    <section id='about'>
      <br></br>
      <br></br>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='award__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='award__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='award__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa mauris, suscipit in metus at, dignissim blandit leo. Sed aliquam enim vitae nunc aliquet scelerisque. Maecenas nunc ante, imperdiet in sodales id, laoreet eu ipsum. Nunc ut tincidunt nulla. Curabitur euismod malesuada donec.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About