import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='Container'>
        <Link href="/">
          <Image
            src="https://i0.wp.com/aestheticdp.com/wp-content/uploads/2024/03/16cf7290-5350-47d5-bddc-88091a90672d.jpg?w=736&ssl=1"
            alt="picture"
            height={150}
            width={150}
            className='image'
          />
        </Link>
      </div>
           
          <div className='icons'>
            <a
              href="https://www.facebook.com/profile.php?id=100065116775317&mibextid=ZbWKwL"
              target="_blank"
            
            >
              <Image src="https://cliply.co/wp-content/uploads/2019/07/371907490_FACEBOOK_ICON_TRANSPARENT_400.gif" alt="Facebook" height={24} width={24} />
            </a>
            <a
              href="https://www.instagram.com/eman_khan278?igsh=dDNvcWhpMDl2N2hl"
              target="_blank"
            
            >
              <Image src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1045.gif" alt="Twitter" height={24} width={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
           
             
            >
              <Image src="https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif" alt="LinkedIn" height={24} width={24} />
            </a>
          
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
            
            >
              <Image src="https://i.pinimg.com/originals/16/21/3f/16213fe0d23aa40c1208ba1594acef50.gif" alt="Instagram" height={24} width={24} />
            </a>
          </div >
          <div  className='links'>
          <Link href="http://localhost:3000/" target="__blank">Home</Link>
          <Link href="http://localhost:3000/about" target="__blank">About</Link>
          <Link href="http://localhost:3000/services" target="__blank">Services</Link>
           <Link href="http://localhost:3000/contact" target="__blank">Contact</Link>
          </div>
          <p className='text'>@Niba Khan. All Rights Reserved</p>
    </footer>
  );
}