'use client';

import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/page.css";
import Link from 'next/link';
import Reveal from "@/component/reveal";
import { supabase } from "@/lib/SupabaseClient";

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  // ===== CONTACT FORM STATE =====
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await res.json();

      console.log("RESPONSE:", data);

      if (data.success) {
        setStatus("Your message has been received. We'll get back to you shortly.");
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus("");
        }, 4000);
      } else {
        setStatus("Failed to send ❌");
      }

    } catch (err) {
      console.error(err);
      setStatus("Something went wrong ❌");
    }

    setLoading(false);
  };

  return (
    <div>

      {/* ===== HOME ===== */}
      <Reveal direction="up">
        <div id="home" className="home-section">
          <div className="home-content">

            <h1 className="greet">
              Building Powerful Web & Mobile Solutions
            </h1>

            <p className="message">
              We design and develop fast, scalable websites and applications that help businesses grow and stand out online.
            </p>

            <div className="link">
              <Link href="#contact" className="btn btnlink1">Start a Project</Link>
              <Link href="#services" className="btn btnlink2">View Services</Link>
            </div>

          </div>
        </div>
      </Reveal>

      {/* ===== ABOUT ===== */}
      <div id="about" className="about-section">

        <Reveal direction="left">
          <div className="about-container">

            <h2 className="about-title">About Technova Solutions</h2>

            <p className="about-text">
              Technova Solutions is a modern technology company focused on building
              innovative, reliable, and user-friendly digital solutions.
            </p>

            <p className="about-text">
              We help startups, businesses, and individuals turn ideas into real digital products
              through clean design, scalable development, and modern technology.
            </p>

            <p className="about-text">
              From websites to full web applications, we focus on performance, usability,
              and long-term growth — not just visuals.
            </p>

            <p className="about-text highlight">
              Our goal is simple: build products that actually solve real problems.
            </p>

          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="about-side">

            <div className="about-card">
              <h3>Our Mission</h3>
              <p>Build innovative and reliable digital solutions that help businesses grow.</p>
            </div>

            <div className="about-card">
              <h3>Our Vision</h3>
              <p>Become a leading tech company delivering impactful digital experiences.</p>
            </div>

            <div className="about-card">
              <h3>Core Values</h3>
              <p>Innovation • Quality • Integrity • Growth • Reliability</p>
            </div>

            <div className="about-cta">
              <h3>Let's Work Together</h3>
              <p>Have a project in mind?</p>

              <Link href="#contact" className="about-btn">
                Get in Touch →
              </Link>
            </div>

          </div>
        </Reveal>

      </div>

      {/* ===== SERVICES ===== */}
      <Reveal direction="up">
        <div id="services" className="services-section">

          <p className="tag">WHAT WE DO</p>
          <h2 className="services-title">Our Services</h2>

          <p className="services-text">
            We provide high-quality digital solutions to help your business grow.
          </p>

          <div className="services-container">

            <Reveal direction="left">
              <div className="service-card">
                <div className="icon">💻</div>
                <h3>Custom Web Development</h3>
                <p>Fast, responsive, and scalable websites built for modern businesses.</p>
                <ul>
                  <li>Landing Pages</li>
                  <li>Business Websites</li>
                  <li>Web Apps</li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="up">
              <div className="service-card">
                <div className="icon">🎨</div>
                <h3>UI/UX Design</h3>
                <p>Clean and user-friendly designs that improve engagement.</p>
                <ul>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>User Experience</li>
                </ul>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="service-card">
                <div className="icon">⚙️</div>
                <h3>Backend Development</h3>
                <p>Secure and scalable systems that power your applications.</p>
                <ul>
                  <li>API Development</li>
                  <li>Database Design</li>
                  <li>Authentication</li>
                </ul>
              </div>
            </Reveal>

          </div>

          <div className="services-cta">
            <p className="cta-tag">READY TO START?</p>

            <h3>Let's build something amazing together</h3>

            <a href="#contact" className="cta-button">
              Start a Project →
            </a>
          </div>

        </div>
      </Reveal>

      {/* ===== CONTACT ===== */}
      <Reveal direction="up">
        <div id="contact" className="contact-section">

          <h2 className="contact-title">Contact Us</h2>

          <p className="contact-text">
            Have a project in mind? Let's build something great together.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-textarea"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {status && <p className="status-msg">{status}</p>}

        </div>
      </Reveal>

    </div>
  );
}