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
                    Front-End Developer. Designing creative web solutions as the <span className="current-position">Lead UI/UX Developer &#64; Tiivra Ventures</span>.
                </p>
                <div className="intro-buttons">
                    <a href="#projects-section">
                        <button className="primary-button">
                            View Projects
                        </button>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/19u1eQhQWR2i4Q31wCgPbn2M_aXNDhzZq/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="secondary-button">
                            <img src={DownloadIcon} alt="Download Icon" />
                            My Resume
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Intro;
