import { FaGithub } from "react-icons/fa";
import {useState, useRef, useEffect} from "react"
import projectJson from "./json/projects.json"
import {RevealOnScroll} from "../RevealOnScroll"
import {FaArrowRight} from "react-icons/fa6"




const Project = ({image, title, subtitle, desc, github, tech_stack, type}) => {
    const isMobile = window.screen.width < 640;
    const githubLogoSize = isMobile ? 40 : 40
    const [showFullImg, setShowFullImg] = useState(false)
    const imageRef = useRef(null)
    const buttonText = showFullImg ? "Shrink image" : "View full image"

    useEffect(() => {
      if (showFullImg && imageRef.current) {
        imageRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, [showFullImg]);
    return (
      <div ref={imageRef} className = {`relative rounded-xl mx-5 border-white border-1 grid py-5 my-3 px-5 ${showFullImg ? "md:grid-cols-1" : "md:grid-cols-2"} gap-6`}> 
        
        <div className = "flex flex-col gap-2 items-center">
          <img src={`${import.meta.env.BASE_URL}${image}`} alt={`Screenshot of ${title}`} onClick ={()=>{if(showFullImg) setShowFullImg(false)}}
          className = {`${showFullImg ? "h-135 cursor-pointer" : "h-45"} rounded-xl object-cover transition-all w-full mx-auto `}/>
          <button type="" className = "hidden sm:block border-2 border-white w-40 rounded-md 
          p-2 cursor-pointer" onClick={()=>setShowFullImg(prev=>!prev)}>{buttonText}</button>
        </div>

        <div className = {`${showFullImg ? "hidden": ""}`}>
          <h3 className = "text-2xl  font-mono font-black">{title}</h3>
          <h4 className = "text-xl font-mono font-semibold text-gray-200 ">{subtitle} </h4>
          <p>{desc}</p> 



          <div className = "mt-5 flex flex-wrap gap-2 ">
            {tech_stack.map((tech, key) => (
              <span key ={key} className = "border-white/10 border-3 py-1 px-2 rounded-full text-sm ">{tech}</span>
            ))}
            
          </div>
          <a href={github} target = "_blank">
            <FaGithub size = {githubLogoSize} className = "hover:-translate-y-1 absolute right-3 bottom-3 linear transition"/>
          </a>
        </div>
      </div> 
    )
}


export const Projects = () => {
  const featuredProjects = projectJson.projects.filter((p) => p.featured).map((project, key) => (
      <Project key={key} image = {project.image} title = {project.title} subtitle = {project.subtitle}
      desc = {project.description} github = {project.github} tech_stack = {project.tech_stack} type = {project.type}/>
  ));
  const restOfProjects = projectJson.projects.filter((p) => !p.featured).map((project, key) => (
      <Project key={key} image = {project.image} title = {project.title} subtitle = {project.subtitle}
      desc = {project.description} github = {project.github} tech_stack = {project.tech_stack} type = {project.type}/>
  ));



  return (
  <section id="projects" className = "py-30 min-h-screen h-auto relative flex w-screen flex-col justify-center items-center">
    
        <div className="max-w-6xl flex flex-col">
          
          <div className="sticky h-full py-2  top-0 backdrop-blur-xs z-100 flex flex-col items-center justify-center ">
            <h1 className = "text-4xl font-bold text-center font-mono
              mb-2 text-white underline ">Featured Projects</h1>
            <h2 className = "text-2xl font-bold text-center font-mono italic
              md:mb-2 text-white md:pb-2">Some of my favourite and proudest work</h2>
          </div>
          {featuredProjects}
        </div>
        
      <div className="max-w-6xl mt-10 flex flex-col">
        <div className="sticky py-2  top-0 backdrop-blur-xs z-100 flex flex-col items-center justify-center ">
          <h1 className = "text-4xl font-bold text-center font-mono
            mb-2 text-white underline ">Other Projects</h1>
        </div>
        {restOfProjects}
      </div>

  </section>
  )


  
}
