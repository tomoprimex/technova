'use client'; // needed for useEffect and Bootstrap JS

import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/page.css"
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // dynamically import bootstrap JS only on client
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div>
        <div id='home' className='home-section'>
            <h1 className='greet'>Welcome to Technova Solutions</h1>
            <h3 className='message'>Building digital experience that help your business stand out.</h3>
            <div className='link'>
                <button type='button' className='btn btnlink1'><Link href='#contact'>Contact Us</Link></button>
                <button type='button' className='btn btnlink2'><Link href='#services'>View Services</Link></button>
            </div>
        </div>
        <div id='about' className='about-section'>
            <div className='about-container'>
              <h2 className='about-title'>About Technova Solutions</h2>
            <p className='about-text'>Technova Solutions is a modern technology company focused on building innovative, reliable, and user-friendly digital solutions. We help businesses and individuals bring their ideas to life through clean design, efficient development, and smart technology.</p>
            <p>We specialize in creating responsive websites, web applications, and digital products that are built for performance and scalability. Our goal is to deliver solutions that not only look good but also solve real problems.</p>
            <p>At Technova Solutions, we are passionate about technology and committed to providing exceptional service to our clients. We work closely with our clients to understand their needs and deliver solutions that exceed their expectations.</p>
            </div>
            <div className='about-mission_vission-container'>
              <div className='m_and_v-container'>
                <div className='about-mission'>
                  <h3 className='about-mission-title'>Our Mission</h3>
                  <p className='about-mission-text'>To build innovative and reliable digital solutions that help businesses grow and succeed in the digital world.</p>
                </div>
                <div className='about-mission'>
                  <h3 className='about-mission-title'>Our Vision</h3>
                  <p className='about-mission-text'>To become a leading tech company delivering impactful and scalable digital experiences across Africa and beyond.</p>
                </div>
              </div>
              <div className='m_and_v-container'>
                  <div className='about-mission'>
                    <h3 className='about-mission-title'>Core Values</h3>
                    <p className='about-mission-text'>Innovation, Quality, Integrity, Growth Mindset, Reliability, Efficiency and Client Satisfaction</p>
                  </div>
                  <div className='about-mission'>
                    <h3 className='about-mission-title'>Let's Work Together</h3>
                    <p className='about-mission-text'>Have a project in mind? Let's build something great together.</p>
                    <Link href="#contact">
                      <button type="button" className="btn about-btn">
                        Get in Touch
                      </button>
                    </Link>
                  </div>
              </div>
              
            </div>
            
        </div>


        <div id="services" className="services-section">

            <h2 className="services-title">Our Services</h2>

            <p className="services-text">
                We deliver modern, scalable digital solutions tailored to your business needs.
            </p>

            <div className="services-container">

                <div className="service-card">
                    <h3>Web Development</h3>
                    <p>Responsive and high-performance websites built with modern technologies.</p>
                </div>

                <div className="service-card">
                    <h3>UI/UX Design</h3>
                    <p>Clean, user-focused designs that improve engagement and experience.</p>
                </div>

                <div className="service-card">
                    <h3>Backend Systems</h3>
                    <p>Secure APIs and scalable backend architecture for powerful applications.</p>
                </div>

            </div>

        </div>



        <div id="contact" className="contact-section">

                  <h2 className="contact-title">Contact Us</h2>

                  <p className="contact-text">
                      Have a project in mind? Let's build something great together.
                  </p>

                  <form className="contact-form">

                      <input type="text" placeholder="Your Name" className="contact-input" />

                      <input type="email" placeholder="Your Email" className="contact-input" />

                      <textarea placeholder="Your Message" className="contact-textarea"></textarea>

                      <button type="submit" className="contact-btn">
                          Send Message
                      </button>

                  </form>

              </div>
    </div>
  );
}