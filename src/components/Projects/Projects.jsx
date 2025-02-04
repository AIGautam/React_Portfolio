import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import ai from "../../assets/Shopx.png"
import va from "../../assets/va.png"
import ch from "../../assets/Bharatdarpan.png"
import ac from "../../assets/ac.jpg"
import textimg from "../../assets/tti.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger}from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(()=>{
    gsap.from("#para", {
      y:100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
          trigger : "#para",
          scroll :"body",
          scrub:2,
          start:"top 80%",
          end :"top 20%"
      }
   })
    gsap.from(".slider", {
      y:100,
      duration: 1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
          trigger : ".slider",
          scroll :"body",
          scrub:2,
          start:"top 80%",
          end :"top 20%"
      }
    })
  })
  return (
    <div id="projects">
        <h1 id="para">1+ YEAR EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <Card  title="AI-Powered Shopping Platform" image={ai}/>
            <Card  title="VIRTUAL ASSISTANT" image={va}/>
            <Card  title="CULTURAL HERITAGE OF INDIA" image={ch}/>
            <Card  title="AI-CHATBOT" image={ac}/>
            <Card  title="AI-TEXT TO IMAGE GENERATOR" image={textimg}/>
        </div>
    </div>
  )
}

export default Projects
