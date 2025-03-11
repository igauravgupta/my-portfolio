import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Hero from  "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Experience from "../components/Experience";


export default function WebRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}