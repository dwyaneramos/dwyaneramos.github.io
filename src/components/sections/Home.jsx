
import fishBodyImg from "../../../public/assets/fish/fish-body.png" 
import fishTailImg from "../../../public/assets/fish/fish-tail.png" 
import fishBody2Img from "../../../public/assets/fish/fish-body-2.png" 
import fishTail2Img from "../../../public/assets/fish/fish-tail-2.png" 
import sharkBodyImg from "../../../public/assets/fish/shark-body.png" 
import sharkTailImg from "../../../public/assets/fish/shark-tail.png"
import githubLogo from "../../../public/assets/github-mark.png"
import {useMemo} from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import {RevealOnScroll} from "../RevealOnScroll"
import {School} from "../Fish.jsx"

export const Home = () => {
  const isMobile = window.screen.width < 640;
  const sharkBoundaries = isMobile ? [100, 80] : [40, 30]
  const fishBoundaries = isMobile ? [30,20] : [7, 5]
  const fish2Boundaries = isMobile ? [14, 10] : [6, 3]
  console.log(isMobile)
  
  return ( 
    <div id="#home" className = "z-40">
      <div className = "flex flex-col justify-center gap-3 items-center absolute top-2/5 w-screen">
        <Title/>
        <SubTitle className = "z-0"/>
        <div className="flex flex-row items-center gap-3">
          <FaLocationDot size={45}/>
          <p className="text-2xl font-mono font-bold text-center">Christchurch, NZ</p>
        </div>
      </div>
      <div className="relative h-screen w-screen text-4xl overflow-hidden z-10">
        <School upperY = {20} lowerY = {5} body = {fishBody2Img} tail = {fishTail2Img}
          amount = {15} widthBoundaries = {fish2Boundaries} heightFactor = {1/3} speedBoundaries = {[33, 35]}/>
        <School upperY = {30} lowerY = {10} body = {fishBodyImg} tail = {fishTailImg}
          amount = {25} widthBoundaries = {fishBoundaries} heightFactor = {2 / 3} speedBoundaries = {[28, 30]}/>
        <School upperY = {45} lowerY = {45}  body = {sharkBodyImg} tail = {sharkTailImg}
          amount = {1} widthBoundaries = {sharkBoundaries} heightFactor = {5 / 11} speedBoundaries = {[17,22]}/>
      </div>
  </div>
  )
}


export const SubTitle = () => {
  return (
    <h2 className = "text-2xl sm:text-4xl sm:pt-0 pt-5 font-mono font-bold text-center" >Final Year Computer Science Student</h2>

  )
}

const ContactBar = () => {
  const iconSize = 50
  return (
    <div className = "relative flex flex-row z-70 justify-center gap-5 pt-5 px-2">
      <a href="https://github.com/riz3ndrr" target="_blank">
        <FaGithub size={iconSize} className = "hover:-translate-y-1 transition cursor-pointer"/>
      </a>
      <a className ="sm:text-4xl text-xl bg-blue-900 rounded-xl p-2 cursor-pointer hover:-translate-y-1 transition" href="#contact" >Want to get in touch?</a>
      <a href="https://www.linkedin.com/in/dwyane-ramos/" target="_blank">
        <FaLinkedin size={iconSize} className = "hover:-translate-y-1 transition cursor-pointer"/>
      </a>
    </div>
  )
}

export const Title = ({opacityClass}) => {
  const firstNameChars = "Dwyane".split("")
  const lastNameChars = "Ramos".split("")
  return (
  <h1 className={` flex flex-row gap-8 justify-center ${opacityClass}  text-5xl  z-70 text-center font-mono font-bold md:text-8xl`}>
      <div className = "flex flex-row">
        {
          firstNameChars.map((c, idx) => {
            return (
              <div key = {idx} className = "animate-wavy-text" style = {{"--wave-delay" : `${idx * 0.1}s`}}>
                {c}
              </div>
            )

          })
        }
      </div>
      <div  className = "flex flex-row">
        {
          lastNameChars.map((c, idx) => {
            return (
              <div key = {idx} className = "animate-wavy-text" style = {{"--wave-delay" : `${idx * 0.1 + 0.1 * firstNameChars.length}s`}}>
                {c}
              </div>
            )

          })
        }
      </div>


  </h1>
  )
}


