export const About = () => {
  const programmingLanguages = ["Python", "C", "Java", "JavaScript", "Bash", "SQL"];
  const tools = ["React", "Git", "Linux", "JavaFX", "JUnit", "NVim", "TailwindCSS", "Pandas", "APIs"];


  return (
    <section id = "about" className = "relative min-h-screen flex items-center justify-center py-20">


      <div className = "max-w-3xl mx-auto px-4">
        <h2 className = "text-5xl font-bold text-center font-mono mb-8 text-white">About Me</h2>
        
        <div className = "rounded-xl p-8 border-white/10 border hover :-translate-y-1 transition-all">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className = "text-xl font-bold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                {tech}
                  </span>
                  ))}
                  
                </div>
              
            </div>
            <div className = "rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className = "text-xl font-bold mb-4">Tools and Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                  <span key = {key} className = "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:-bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                {tech}
                  </span>
                  ))}
                  
                </div>
              
            </div>
          </div>
        </div>
  



      </div >
  
    </section>
  )
}
