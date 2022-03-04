import React from "react";
import "./Testimonial.css";
import AVTR1 from "../../assets/Avatar4.jpg";
import AVTR2 from "../../assets/Avatar3.jpg";

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:'Tina Show',
    review:'Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizi Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir diziModi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir diziModi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizi'
  },
  {
    avatar:AVTR1,
    name:'Nicola Tesla',
    review:'Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizi Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizi Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizi'
  },
  {
    avatar:AVTR2,
    name:'Selçuk Bayraktar',
    review:'Modi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir diModi alias anıma lorem aghıu bu sabahların bir anlamı olmal vera medecerfzir dizizi'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={ [Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
     {
       data.map(({avatar,name,review},index)=>{
         return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar Demo" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
         )
       })
     }
      </Swiper>
    </section>
  );
};

export default Testimonials;
