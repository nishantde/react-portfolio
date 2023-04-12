import { useState } from "react";
import "./App.css";
import Projects from "./Projects";
import Project from "./Project";
import Tools from "./Tools";
import Tool from "./Tool";
import Intro from "./Intro";
import Navbar from "./Navbar";
// import Toggle from "./Toggle";

// import BackgroundImage from "./assets/images/background.png";
// import SunIcon from "./assets/icons/sun-icon.png";
// import MoonIcon from "./assets/icons/moon-icon.png";

function App() {
    var details = require("./details.json");
    var projects = details[0].projectDetails;
    var tools = details[1].toolDetails;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setIsDarkMode((mode) => !mode);
    };
    return (
        <div className="App">
            <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                {/* <div className="background-image"><img src={BackgroundImage} alt="Geometric shapes" /></div> */}
                {/* <Toggle toggleDarkMode={toggleDarkMode} /> */}

                {/* <div className="modeToggle">
                    <div className="light-mode-side">
                        <img src={SunIcon} alt="Icon of a sun" />
                    </div>
                    <label className="switch">
                        <input type="checkbox" onClick={toggleDarkMode} />
                        <span className="slider round"></span>
                    </label>
                    <div className="dark-mode-side">
                        <img src={MoonIcon} alt="Icon of a moon" />
                    </div>
                </div> */}

                <Navbar toggleDarkMode={toggleDarkMode}/>
                <Intro />
                <div className="section-heading">Projects</div>
                <div className="projects-section">
                    <Projects>
                        {projects.map((project) => (
                            <Project props={project} key={project.id} />
                        ))}
                    </Projects>
                </div>
                <div className="section-heading">Tools &amp; Technologies</div>
                <Tools>
                    {tools.map((tool) => (
                        <Tool props={tool} key={tool.id} />
                    ))}
                </Tools>
            </div>
        </div>
    );
}

export default App;
