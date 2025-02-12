import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'HTML5', icon: '/icons/html.webp' },
  { name: 'CSS3', icon: '/icons/css3.png' },
  { name: 'JavaScript', icon: '/icons/js.webp' },
  { name: 'React', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs_icon_dark.svg' },
  { name: 'Node.js', icon: '/icons/nodejs.svg' },
  { name: 'MongoDB', icon: '/icons/mongodb.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'GitHub', icon: '/icons/Github-ca69043f.png' },
  { name: 'Java', icon: '/icons/java.svg' },
  { name: 'Python', icon: '/icons/python.svg' },
  { name: 'C', icon: '/icons/c.png' },
];

const Skills = () => {
  const skillsRef = useRef(null);

  useGSAP(() => {
    gsap.from('.section-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.section-title',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 2,
      },
    });
    
    gsap.from('.skill-card', {
      opacity: 0,
      scale: 0.5,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: skillsRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={skillsRef} className="skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
