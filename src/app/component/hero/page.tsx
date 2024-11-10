import Image from "next/image";
import Link from "next/link";
import './hero.css'; 

export default function Hero() {
  return (
    <div className='imageContainer'>
      <Link href="/">
        <Image
          src='/images/hero img.jpg'
          alt="picture"
          height={300}
          width={300}
          className='image'
        />
      </Link>
      <h1 className='heading'>Hello, it's Me Niba Khan</h1>
      <p className='description'>
        "AI Student proficient in TypeScript, HTML, CSS, and a Certified Information Technology professional. 
        <br/>Dedicated to advancing AI with coding expertise and ready to tackle cutting-edge challenges."
      </p>
      <Link href="https://cv-in-html-css.vercel.app/" className='link'>
        Download CV
      </Link>
    </div>
  );
}
