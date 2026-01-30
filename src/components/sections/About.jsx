import {RevealOnScroll} from "../RevealOnScroll"

const Education = () => {
  const courses = ["DSA", "Software Engineering",  "Computer Architecture",
    "AI", "Networks",  "Databases"];
  return (
    <div className = "rounded-xl p-8 border-white/10 border-3 my-5">
      <h3 className = "text-2xl font-bold mb-4 border-b-2 border-white w-30">Education</h3>
      <div className ="flex flex-row place-content-around">
        <div className="w-200">
          <h4 className ="text-xl font-bold">University of Canterbury</h4>
          <p>BSc, Majoring in Computer Science (8.94 GPA)</p>
          <p>Expected Graduation Date: End of 2026</p>
        </div>

        <div className="w-200">
          <h4 className = "text-xl font-bold">Relevant Coursework</h4>
          <div className = "flex flex-wrap gap-2">
            {courses.map((course, key) => (
                <span key = {key} className = "border-2 border-white/10 py-1 px-3 rounded-xl text-sm">
                {course}
                </span>
            ))}
          </div>
        </div>
      </div>
    </div>

  )
}


const SkillsSection = ({header, skills}) => {
  return (
    <div className = "rounded-xl p-3 hover:-translate-y-1 transition-all">
      <h3 className = "text-lg font-bold mb-4">{header}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, key) => (
          <span key = {key} className = "bg-blue-500/10 text-blue-200 py-1 px-3 rounded-full text-sm">
            {s}
          </span>
          ))}
          
        </div>
      
    </div>
  )
}

const Skills = () => {
  const programmingLanguages = ["Python", "JavaScript", "SQL"];
  const tools = ["React", "Git", "Linux", "NumPy", "Vite", "TailwindCSS", "Pandas", "APIs"];
  const languages = ["English", "Tagalog", "Spanish"]

  return (

        <div className = "rounded-xl p-8 border-white/10 border-3 border">

          <h3 className = "text-2xl font-bold mb-4 border-b-2 border-white w-18">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SkillsSection header={"Programming Languages"} skills = {programmingLanguages}/>
            <SkillsSection header={"Tools and Frameworks"} skills = {tools}/>
            <SkillsSection header={"Languages"} skills = {languages}/>
              
          </div>
        </div>
  
  )
}

export const About = () => {

  return (
    <section id = "about" className = "relative min-h-screen h-auto py-20 flex items-center justify-center">


      <div className = "max-w-5xl mx-auto px-4">
        <h2 className = "text-4xl font-bold text-center font-mono mb-5 text-white">About Me</h2>
        <p className = "text-center  text-md">Kia Ora! I'm a student based in Christchurch,
          New Zealand, and I'm looking to specialise in frontend development as I love the development and seeing things come to life as I code</p>

        <Education/>        
        <Skills/>
        <div className = "rounded-xl border-3 p-8 border-white/10 border my-5">
          <h3 className = "text-2xl font-bold mb-4">Work Experience</h3>
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
        



      </div >
  
    </section>
  )
} 
