import { Link } from "react-router-dom";

import Toggle from "./Toggle";
import "./Navbar.css";

import MainIcon from "./assets/icons/main-icon.png";

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="homepage-logo">
                <Link to="/">
                    <img src={MainIcon} alt="Main icon for nishant.work" />
                </Link>
            </div>
            <div className="list-of-links">
                <div className="toggle-button">
                    <Toggle toggleDarkMode={props.toggleDarkMode} />
                </div>
                <ul className="links">
                    <li className="link hide-on-desktop">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/about-me">About</Link>
                    </li>
                    <li className="link">
                        <Link to="/contact-me">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
