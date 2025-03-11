import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger}from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
    useGSAP(()=>{
        gsap.from(".circle", {
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger : ".circle",
                scroll :"body",
                scrub:2,
                start:"top 60%",
                end :"top 20%"
            }
        })
        gsap.from(".line", {
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            stagger:1,
            scrollTrigger:{
                trigger : ".line",
                scroll :"body",
                scrub:2,
                start:"top 60%",
                end :"top 30%"
            }
        })
        gsap.from(".aboutdetails h1", {
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            stagger:1,
            scrollTrigger:{
                trigger : ".aboutdetails h1",
                scroll :"body",
                scrub:2,
                start:"top 60%",
                end :"top 30%"
            }
        })
        gsap.from(".aboutdetails ul li", {
            y:+100,
            duration: 1,
            opacity:0,
            stagger:1,
            stagger:1,
            scrollTrigger:{
                trigger : ".aboutdetails ul li",
                scroll :"body",
                scrub:2,
                start:"top 60%",
                end :"top 30%"
            }
        })
        gsap.from(".rightabout", {
            x:-100,
            duration: 1,
            opacity:0,
            stagger:1,
            stagger:1,
            scrollTrigger:{
                trigger : ".rightabout",
                scroll :"body",
                scrub:2,
                start:"top 60%",
                end :"top 30%"
            }
        })
    })
  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
        </div>
        <div className="aboutdetails">
            <div className="Personalinfo">
                <h1>Personal Info</h1>
                <ul>
                    <li>
                        <span>NAME</span> : GAUTAM KUMAR
                    </li>
                    <li>
                        <span>AGE</span> : 22 
                    </li>
                    <li>
                        <span>GENDER</span> : MALE 
                    </li>
                    <li>
                        <span>LANGUAGE</span> : ENGLISH, HINDI
                    </li>
                </ul>
            </div>
            <div className="education">
                <h1>Education</h1>
                <ul>
                    <li>
                        <span>DEGREE</span> : B-TECH
                    </li>
                    <li>
                        <span>BRANCH</span> : CSE(AIML) 
                    </li>
                    <li>
                        <span>SGPA</span> : 8.92 
                    </li>
                </ul>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul>
                    <li>
                         MERN STACK DEVELOPER
                    </li>
                    <li>
                         DSA 
                    </li>
                    <li>
                        JAVA, PYTHON
                    </li>
                    <li>
                        GIT, GITHUB
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className="rightabout">
            <Card title="MERN STACK DEVELOPER" image={mern}/>
            <Card title="JAVA" image={java}/>
            <Card title="DSA" image={dsa}/>
      </div>
    </div>
  )
}

export default About
