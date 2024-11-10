import Image from 'next/image';
import Link from 'next/link';
import './about.css';

export default function Aboutpage() {
  return (
    <div className='imageContainer'>
      <Link href="/">
        <Image
          src="/images/about image.jpg"
          alt="picture"
          height={300}
          width={300}
          className='image'
        />
      </Link>

      <h1 className='heading'>About Me</h1>
      <p className='description'>
      Welcome To My Portfolio! I am an AI Engineer with a robust foundation in front-end development technologies
    , including HTML, CSS, JavaScript, TypeScript, React, and Next.js. As a Certified Information Technology (CIT)
      professional, I bring a structured approach to development, combining my technical expertise with a strong understanding 
     of industry best practices. My experience spans building intuitive and responsive user interfaces, leveraging modern frameworks,
     and creating seamless user experiences. Passionate about advancing in AI and software engineering,
      Im committed to continuous learning and innovation to drive impactful solutions.
      </p>
      <p className='heading'>Skills</p>
      <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}/>70%</div>
        <div className='about-skill'><p>Typescript</p><hr style={{width:"70%"}}/>90%</div>
        <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}}/>60%</div>
        <div className='about-skill'><p>CIT</p><hr style={{width:"70%"}}/>90%</div>
        <div className='about-skill'><p>Next.js & React</p><hr style={{width:"60%"}}/>75%</div>
      </div>
    </div>
   
  );
}

    

