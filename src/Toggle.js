import "./Toggle.css";

import SunIcon from "./assets/icons/sun-icon.png";
import MoonIcon from "./assets/icons/moon-icon.png";

const Toggle = (props) => {
    return (
        <div className="modeToggle">
            <div className="light-mode-side">
                <img src={SunIcon} alt="Icon of a sun" />
            </div>
            <label className="switch">
                <input type="checkbox" onClick={props.toggleDarkMode} />
                <span className="slider round"></span>
            </label>
            <div className="dark-mode-side">
                <img src={MoonIcon} alt="Icon of a moon" />
            </div>
        </div>
    );
};

export default Toggle;
