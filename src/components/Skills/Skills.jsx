import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import './Skills.css';

const skills = [
  { name: 'HTML5', icon: '/icons/html5.svg' },
  { name: 'CSS3', icon: '/icons/css3.png' },
  { name: 'JavaScript', icon: '/icons/javascript.png' },
  { name: 'React', icon: '/icons/react.png' },
  { name: 'Next.js', icon: '/icons/nextjs.png' },
  { name: 'Node.js', icon: '/icons/nodejs.png' },
  { name: 'MongoDB', icon: '/icons/mongodb.png' },
  { name: 'MySQL', icon: '/icons/mysql.png' },
  { name: 'GitHub', icon: '/icons/github.png' },
  { name: 'Java', icon: '/icons/java.png' },
  { name: 'Python', icon: '/icons/python.png' },
  { name: 'C', icon: '/icons/c.png' },
];

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    gsap.from(".skill-card", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      stagger: 0.1, 
      scrollTrigger: {
        trigger: ".skills-section",
        start: "top 80%", 
        end: "bottom 10%", 
        scrub: true, 
        once: true,
      }
    });
  });

  return (
    <section className="skills-section">
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
