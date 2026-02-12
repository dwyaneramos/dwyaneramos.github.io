import {RevealOnScroll} from "../RevealOnScroll"
import molamola from "../../../public/assets/fish/molamola.png"
import {School} from "../Fish.jsx"

const Education = () => {
  const courses = ["DSA", "Software Engineering",  "Computer Architecture",
    "AI", "Networks",  "Databases"];
  return (
    <div className = "text-center w-full">
      <h3 className = "text-2xl md:text-3xl font-bold underline">Education</h3>
      <h4 className = "text-xl md:text-2xl font-bold my-3">University of Canterbury</h4>
      <div className="text-lg md:text-2xl">
        <p className = "">BSc majoring in Computer Science (8.94 GPA)</p>
        <p className = "">Expected Graduation Date: End of 2026</p>
      </div>
      <h4 className = "text-xl font-bold my-3">Relevant Coursework</h4>
      <div className = "flex flex-row justify-center flex-wrap gap-3">
        {courses.map((c, id) => {
          return (
            <div className="text-md border-2 border-white/10 p-2 rounded-md" key = {id}>
              {c} 
            </div>
          )
        })}
      </div>
    </div>

  )
}


const SkillsSection = ({header, skills, growth}) => {
  return (
    <div className = {`p-1 rounded-xl ${growth}`}>


      <h4 className = "text-2xl font-bold my-3 text-center">{header}</h4>

      <div className = "flex flex-row justify-center gap-3 flex-wrap">
        {skills.map((s, id) => {
          return (
            <div className="text-md border-2 border-white/10 p-2 rounded-md" key = {id}>
              {s} 
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

const Skills = () => {
  const programmingLanguages = ["Python", "JavaScript", "SQL"];
  const tools = ["React", "Git", "Linux", "NumPy", "Vite", "TailwindCSS", "Pandas", "APIs"];
  const languages = ["English", "Tagalog", "Spanish"]

  return (
      <div>
        <h3 className = "text-2xl md:text-3xl font-bold underline text-center">Skills</h3>
        <div className = "">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <SkillsSection header={"Programming Languages"} skills = {programmingLanguages} growth = {"grow-1"}/>
            <SkillsSection header={"Tools and Frameworks"} skills = {tools} growth = {"grow-10"}/>
            <SkillsSection header={"Languages"} skills = {languages} growth = {"grow-1"}/>
              
          </div>
        </div>
      </div>
  
  )
}

const WorkBulletPoint = ({header, timeline, desc}) => {
  return (
    <div className="p-3 rounded-md border-white border-1">
      <h4 className ="text-xl font-bold">{header}</h4>
      <p className="mb-3">{timeline}</p>
      <p>{desc}</p>
    </div>
  )
}

const WorkExperience = () => {
  return (

        <div className = "text-center md:text-left">
        <h3 className = "text-2xl mb-5 md:text-3xl font-bold underline text-center">Work Experience</h3>
          <div className = "flex flex-col gap-5 sm:gap-3">
            <WorkBulletPoint header={"Warehouse Operator"} timeline={"Dec 2025 - Feb 2026"} desc={"Summer role where I prepared shipments for back-to-school orders"}/>
            <WorkBulletPoint header={"Mathematics Tutor"} timeline={"Sept 2023 - Present"} desc={"Attended to the needs of students ranging from year 2 to year 13 and various education levels and upbringing. I explained complex topics clearly to them and encourage them to try their best"}/>
            <WorkBulletPoint header={"Sales Assistant"} timeline={"Dec 2021 - Dec 2022"} desc={"Actively engaged with customers and I was responsible for the opening/closing of the store"}/>
          </div>
        </div>
  )
}

export const About = () => {

  return (
    <section id = "about" className = "relative flex justify-center">
    

      <div className = "max-w-5xl mx-auto px-4 z-10 ">
        <h2 className = "text-4xl font-bold text-center font-mono mb-2 text-white sticky pt-10 pb-5 top-0 w-full underline  backdrop-blur-xs">About Me</h2>
        <p className = "text-center w-full text-wrap  text-lg md:text-2xl ">Kia Ora! I'm a final-year student based in Christchurch,
          New Zealand, and I'm looking to specialise in frontend development.</p>
        
        <div className="mt-10 flex gap-20 flex-col">
          <Education/>        
          <Skills/>
          <WorkExperience/>
        </div>
      </div>

      <div className=" absolute top-0 left-0 h-full w-full overflow-hidden z-0">
        <School upperY = {45} lowerY = {45} body = {molamola} tail = {molamola}
          amount = {1} widthBoundaries = {[30, 30]} heightFactor = {5/6} speedBoundaries={[30, 35]}/>
      </div>
  
    </section>
  )
} 
