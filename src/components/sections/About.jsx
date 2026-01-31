import {RevealOnScroll} from "../RevealOnScroll"
import molamola from "../../../public/assets/molamola.png"
import {School} from "../Fish.jsx"

const Education = () => {
  const courses = ["DSA", "Software Engineering",  "Computer Architecture",
    "AI", "Networks",  "Databases"];
  return (
    <div className = "text-center">
      <h2 className = "text-5xl font-bold text-center font-mono mb-2 text-white  sticky pt-10 pb-5 top-0 w-full underline  backdrop-blur-xs">Education</h2>
      <h4 className = "text-4xl font-bold my-3">University of Canterbury</h4>
      <p className = "text-2xl ">BSc majoring in Computer Science (8.94 GPA)</p>
      <p className = "text-2xl ">Expected Graduation Date: End of 2026</p>
      <h4 className = "text-3xl font-bold my-3">Relevant Coursework</h4>
      <div className = "flex flex-row justify-center gap-3">
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
        <h3 className = "text-5xl font-bold underline text-center">Skills</h3>
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

const WorkExperience = () => {
  return (

        <div className = "">
        <h3 className = "text-5xl font-bold underline text-center">Work Experience</h3>
          <div className = "flex flex-col gap-3">
            <div>
              <h4 className ="text-xl font-bold">Picker / Packer</h4>
              <p className="mb-3">Dec 2025 - Feb 2026</p>
              <p>Prepared shipments for back-to-school orders</p>
            </div>

            <div>
              <h4 className ="text-xl font-bold">Mathematics Tutor</h4>
              <p className="mb-3">Sept 2023 - Present</p>
              <p>Attended to the needs of students ranging from year 2 to year 13 and various education levels and upbringing. I explained complex topics clearly to them and encourage them to try their best</p>
            </div>

            <div >
              <h4 className ="text-xl font-bold">Sales Assistant</h4>
              <p className="mb-3">Dec 2021 - Dec 2022</p>
              <p>Actively engaged with customers and I was responsible for the opening/closing of the store</p>
            </div>
          </div>
        </div>
  )
}

export const About = () => {

  return (
    <section id = "about" className = "relative flex justify-center">
    

      <div className = "max-w-5xl mx-auto px-4 z-10 ">
        <h2 className = "text-5xl font-bold text-center font-mono mb-2 text-white sticky pt-10 pb-5 top-0 w-full underline  backdrop-blur-xs">About Me</h2>
        <p className = "text-center  text-2xl ">Kia Ora! I'm a final-year student based in Christchurch,
          New Zealand, and I'm looking to specialise in frontend development.</p>
        
        <div className="mt-10 flex gap-20 flex-col">
          <Education/>        
          <Skills/>
          <WorkExperience/>
        </div>
      </div>

      <div className=" absolute top-0 left-0 h-full w-full overflow-hidden z-0">
        <School upperY = {45} lowerY = {45} isSlow = {true} isSmall= {false} body = {molamola} tail = {molamola}
          amount = {1} widthBoundaries = {[30, 30]} heightFactor = {5/6}/>
      </div>
  
    </section>
  )
} 
