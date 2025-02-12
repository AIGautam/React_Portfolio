import React from 'react'
import "./Home.css"
import man1 from "../../assets/man1.png"
import TypingEffect from 'react-typing-effect'
// import {Typewriter}  from "react-simple-typewriter";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function Home() {

    useGSAP(()=>{
        let tl1 = gsap.timeline();
        tl1.from(".line1",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line2",{
            y:80,
            duration:1,
            opacity:0
        })
        tl1.from(".line3",{
            y:80,
            duration:1,
            opacity:0
        })
        gsap.from(".righthome img",{
            x:200,
            duration:1,
            opacity:0
        })
    })

  return (
    <div id = "home">
        <div className="lefthome">
            <div className="homedetails">
                <div className="line1">I'M</div>
                <div className="line2">GAUTAM KUMAR</div>
                <div className="line3">
                    <TypingEffect
                    text = {["MERN DEVELOPER", "UI / UX DESIGNER", "SOFTWARE DEVELOPER", "WEB DEVELOPER"]}
                    speed={100}
                    eraseSpeed={50}
                    eraseDelay={1000}
                    typingDelay={500}
                    TypingEffect
                    cursor='|'
                    />
                       {/* <span style={{ fontWeight: "bold", color: "#ff6347" }}>
                            <Typewriter
                                words={["MERN DEVELOPER", "UI UX DESIGNER", "SOFTWARE DEVELOPER", "WEB DEVELOPER"]}
                                loop={Infinity}
                                cursor
                                cursorStyle="|"
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span> */}
                        </div>
                        {/* <button>HIRE ME</button> */}
                        <div className="button-group">
                            <button className="hire-me">HIRE ME</button>
                            <a href="https://drive.google.com/file/d/1JfzzyKOYY-cMeOHf-MtXc8lmdTa6erCy/view?usp=sharing" download className="download-resume">
                                DOWNLOAD RESUME
                            </a>
                        </div>

            </div>
        </div>

        <div className="righthome">
            <img src={man1} alt="" />
        </div>
    </div>
  )
}

export default Home
