'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container">
      <h1>Niba <span>Khan</span></h1>
      <div className="menu-icon" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <Link href="http://localhost:3000/" target="_blank">Home</Link>
        <Link href="http://localhost:3000/about" target="_blank">About</Link>
        <Link href="http://localhost:3000/services" target="_blank">Services</Link>
        <Link href="http://localhost:3000/contact" target="_blank">Contact</Link>

        <button className='download-btn'>
          <Link href='https://milestone-1-2-beryl.vercel.app/' target="_blank">Resume Builder</Link>
        </button>
      </div>
    </div>
  );
}
