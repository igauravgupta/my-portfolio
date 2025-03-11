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
                    <Route path="/Builds"element={<Projects/>}/>
                    <Route path="/WhoAmI" element={<About/>}/>
                    <Route path="/DevPowers" element={<Skills/>}/>
                    <Route path="/Let’sConnect" element={<Contact/>}/>
                    <Route path="/CareerChronicles" element={<Experience/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}