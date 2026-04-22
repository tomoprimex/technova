'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Link from "next/link"
import styles from "../styles/footer.css"
import Image from "next/image";
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Bootstrap JS for dropdowns
  }, []);

  return (
    <div>
        <footer className="footer">

            <div className="footer-container">

                {/* Brand section */}
                <div className="footer-brand">
                    <h2>Technova Solutions</h2>
                    <p>
                        Building innovative digital solutions that power modern businesses.
                    </p>
                </div>

                {/* Links section */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>

            {/* Bottom line */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Technova Solutions. All rights reserved.</p>
            </div>

    </footer>
    </div>
  )
}