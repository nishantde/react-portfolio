import "./Intro.css";

import mainPageImage from "./assets/images/misc/main-page-image.png";
import DownloadIcon from "./assets/icons/download-icon.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-image">
                <img
                    src={mainPageImage}
                    alt="Vector illustration of man in front of a mobile screen"
                />
            </div>
            <div className="intro-text">
                <h1>Hello 👋</h1>
                <p>
                    My name is Nishant, and I am a UI/UX, Product Designer, and
                    Front-End Developer based in South Carolina.
                </p>
                <div className="intro-buttons">
                    <a href="#projects-section">
                        <button className="primary-button">
                            View Projects
                        </button>
                    </a>
                    <a href="./assets/downloads/Resume.pdf" download>
                        <button className="secondary-button">
                        <img src={DownloadIcon} alt="Download Icon" />
                            Download My Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
