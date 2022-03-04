import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import {GrLinkedin} from 'react-icons/gr';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact=()=> {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nzdeofv', 'template_s4luc8a',form.current,'ML_yocoQStEsBgLax')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>duzgunberke@gmail.com</h5>
            <a href='mailto:duzgunberke2@gmail.com' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
            <GrLinkedin className='contact__option-icon'/>
            <h4>Linkedln</h4>
            <h5>berke-düzgün</h5>
            <a href='https://www.linkedin.com/in/berkeduzgun/' target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+90 507 911 74 75</h5>
            <a href='https://api.whatsapp.com/send?phone=+905079117475' target={'_blank'}>Send a message</a>
          </article>
        </div>

        {/*End of contact options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" placeholder='Your Mail' required />
          <textarea name='message' rows="7" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact