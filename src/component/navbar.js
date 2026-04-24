'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import Link from "next/link";
import "../app/styles/navbar.css";

export default function Navbar() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <nav className='navbar'>
      <Link href='#home'>
        <img src='/images/technova.png' alt='Technova Logo' className='nav-logo'/>
      </Link>

      <ul className='nav-list'>
        <li className='nav-item'><Link href='#home'>Home</Link></li>
        <li className='nav-item'><Link href='#about'>About</Link></li>
        <li className='nav-item'><Link href='#services'>Services</Link></li>
        <li className='nav-item'><Link href='#contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}