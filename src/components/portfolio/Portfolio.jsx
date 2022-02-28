import React from 'react';
import './Portfolio.css';
import IMG from '../../assets/project.jpg';
import IMG2 from '../../assets/project2.jpg';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt=""></img>
          </div>
          <h3>This is a portfolio item title</h3>
          <a href='#' className='btn' target={'_blank'}>Github</a>
          <a href='#' className='btn btn-primary' target={'_blank'}>Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio