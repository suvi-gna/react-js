import {Link, Route, Routes} from "react-router-dom"

import Home from './Home'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'

export default function Navbar()
{
    return(
        <>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />


            </Routes>
        </>
    ) 
}