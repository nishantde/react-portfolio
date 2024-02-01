import "./Footer.css";

import { Link } from "react-router-dom";

import MainIcon from "./assets/icons/main-icon.png";
import whatsappLogo from "../src/assets/images/logos/whatsapp-logo.png";

const Footer = () => {
    return (
        <div className="footer-content">
            <div className="footer-elements">
                <div className="site-logo">
                    <img src={MainIcon} alt="Main icon for nishant.work" />
                </div>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/nishantde/" className="footer-link">LinkedIn</a>
                    <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
                </div>
                <div className="contact-number">
                    <img src={whatsappLogo} alt="Logo for WhatsApp" />
                    <p><span className="phone-subheading">Phone</span> <span className="phone-number">+91 98209 23067</span></p>
                    {/* <span></span> */}
                </div>
            </div>
        </div>
    )
};

export default Footer;