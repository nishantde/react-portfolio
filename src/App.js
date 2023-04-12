import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Projects from "./Projects";
import Project from "./Project";
import Tools from "./Tools";
import Tool from "./Tool";
import Intro from "./Intro";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";
import RoomsAndMatesPage from "./pages/RoomsAndMatesPage";
import SwipePage from "./pages/SwipePage";
import ParkItPage from "./pages/ParkItPage";
import VCFZSPage from "./pages/VCFZSPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
    var details = require("./details.json");
    var projects = details[0].projectDetails;
    var tools = details[1].toolDetails;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((mode) => !mode);
    };
    const HomePage = () => {
        return (
            <div>
                <div>
                    <Intro />
                    <div className="section-heading" id="projects-section">Projects</div>
                    <div className="projects-section">
                        <Projects>
                            {projects.map((project) => (
                                <Project props={project} key={project.id} />
                            ))}
                        </Projects>
                    </div>
                    <div className="section-heading" id="tools-section">
                        Tools &amp; Technologies
                    </div>
                    <Tools>
                        {tools.map((tool) => (
                            <Tool props={tool} key={tool.id} />
                        ))}
                    </Tools>
                </div>
            </div>
        );
    };

    const AboutPage = () => {
        return <h1>The About Page</h1>;
    };

    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                    <Navbar toggleDarkMode={toggleDarkMode} />
                    <Routes>
                        <Route path="/about" element={<AboutPage />} />
                        <Route
                            path="/rooms-and-mates"
                            element={<RoomsAndMatesPage />}
                        />
                        <Route path="/swipe" element={<SwipePage />} />
                        <Route path="/park-it" element={<ParkItPage />} />
                        <Route path="/vcfzs" element={<VCFZSPage />} />
                        <Route path="/contact-me" element={<ContactMePage />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
