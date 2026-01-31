import { FaGithub } from "react-icons/fa";
import projectJson from "./json/projects.json"
import {RevealOnScroll} from "../RevealOnScroll"




const Project = ({image, title, subtitle, desc, github, tech_stack, type}) => {
    const isMobile = window.screen.width < 640;
    const githubLogoSize = isMobile ? 40 : 40
    return (
      <div className = "rounded-xl mx-5  border-white/10 border-1 bg-[#021738]  grid py-5 my-3 px-5 grid-cols-1 md:grid-cols-2  gap-6 "> 
        <img src={`${import.meta.env.BASE_URL}${image}`} alt={`Screenshot of ${title}`} className = "rounded-xl object-cover h-75 max-w-xl w-full mx-auto "/>

        <div className = "relative ">
          <h3 className = "text-2xl  font-mono font-black">{title}</h3>
          <h4 className = "text-xl font-mono font-semibold ">{subtitle} </h4>
          <p>{desc}</p> 



          <h4 className = "text-2xl mt-5 font-mono font-bold">Tech Stack</h4>
          <div className = "flex flex-wrap gap-2 ">
            {tech_stack.map((tech, key) => (
              <span key ={key} className = "border-white/10 border-3 py-1 px-2 rounded-full text-sm ">{tech}</span>
            ))}
            
          </div>
          <a href={github} target = "_blank">
            <FaGithub size = {githubLogoSize} className = "hover:-translate-y-1 absolute sm:bottom-0  right-0 linear transition"/>
          </a>
        </div>
      </div> 
    )
}


export const Projects = () => {
  const projects = projectJson.projects;
  const projectsDisplayed = projects.map((project, key) => (
      <Project key={key} image = {project.image} title = {project.title} subtitle = {project.subtitle}
      desc = {project.description} github = {project.github} tech_stack = {project.tech_stack} type = {project.type}/>
  ));


  return (
  <section id="projects" className = "py-30 min-h-screen h-auto relative flex justify-center items-center">
    

    <div className = "max-w-6xl">
      <h2 className = "text-5xl font-mono text-center font-bold text-white">Projects</h2> 
      <div className = "grid">
        {projectsDisplayed}
      </div>
    </div>

  </section>
  )


  
}
