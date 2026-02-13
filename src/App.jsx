import {LoadingScreen} from "./components/LoadingScreen" 
import {Navbar} from "./components/Navbar"
import {MobileMenu} from "./components/MobileMenu"
import {Home, Title} from "./components/sections/Home"
import {About} from "./components/sections/About" 
import {Projects} from "./components/sections/Projects"
import {ContactFooter} from "./components/sections/Contact"
import "./index.css"
import {useState, useEffect} from "react";




function App() {
  const [isLoaded, setIsLoaded ] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.screen.width)
  
  useEffect(() => {
    setWindowSize(window.screen.width)
  }, [window.screen.width])

  return (
    <>
      <div className = {`min-h-screen bg-radial-[at_50%_0%] from-blue-500 from-0% to-60% to-blue-900
        transition-opacity duration-800 ${isLoaded ? "opacity-100": "opacity-0"} text-gray-100`}>
        <Home/>
        {/*<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>*/}
        <MobileMenu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
        <About/>
        <Projects/>
        <ContactFooter/>

      </div>
    </>
  )
}

export default App
