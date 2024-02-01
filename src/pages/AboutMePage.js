import "./AboutMePage.css";

import { Link } from "react-router-dom";

import aboutMePhoto from "../assets/images/misc/about-me-photo.jpg";
import linkedinLogo from "../assets/images/logos/linkedin-logo.png";
import githubLogo from "../assets/images/logos/github-logo.png";
import facebookLogo from "../assets/images/logos/facebook-logo.png";
import instagramLogo from "../assets/images/logos/instagram-logo.png";
import twitterLogo from "../assets/images/logos/twitter-logo.png";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

const AboutMePage = () => {
    return (
        <div className="about-me">
            <div className="about-me-content">
                <div className="about-me-description">
                    <h2>Hey, I'm Nishant</h2>
                    <p>
                        I am from Mumbai, a UI/UX Designer and Front-End
                        Developer who loves everything web, movies, and baking!
                    </p>
                    <p>
                        I completed my bachelor's in Computer Engineering from
                        Narsee Monjee Institute of Management Studies, Mumbai
                        and my master's in Computer Science from Clemson
                        University, South Carolina, United States. While my
                        undergraduate degree was focused on the developmental
                        side of engineering, my graduate degree gave me a fresh
                        new perspective on the other side of the glass, and I
                        fell in love with UI design. I met many new people and,
                        over the course of two years, collaborated with them on
                        various projects, which I've showcased on{" "}
                        <Link className="about-me-description-link" to="/">
                            my home page
                        </Link>
                        .
                    </p>
                    <p>
                        I have around two years of work experience in the United
                        States, and I'm currently looking for roles in the
                        Front-End Development domain and the Product Design and
                        UI/UX space in India.
                    </p>
                    <p>
                        For business inquiries, I'm reachable via my{" "}
                        <Link
                            className="about-me-description-link"
                            to="/contact-me"
                        >
                            contact page
                        </Link>
                        . You can also find my social media links below. Happy
                        to connect!
                    </p>
                </div>
                <div className="about-me-photo">
                    <img
                        src={aboutMePhoto}
                        alt="Nishant Deshpande standing with the Clemson University library in the background"
                    />
                </div>
            </div>
            <div className="about-me-links">
                <ul>
                    <li>
                        <img src={linkedinLogo} alt="Logo for LinkedIn" />
                        <a href="https://www.linkedin.com/in/nishantde/">
                            nishantde
                        </a>
                    </li>
                    <li>
                        <img src={githubLogo} alt="Logo for GitHub" />
                        <a href="https://github.com/nishantde">nishantde</a>
                    </li>
                    <li>
                        <img src={facebookLogo} alt="Logo for Facebook" />
                        <a href="https://www.facebook.com/nishant.desh">
                            nishant.desh
                        </a>
                    </li>
                    <li>
                        <img src={instagramLogo} alt="Logo for Instagram" />
                        <a href="https://www.instagram.com/arshant/">arshant</a>
                    </li>
                    <li>
                        <img src={twitterLogo} alt="Logo for Twitter" />
                        <a href="https://twitter.com/nishdesh">nishdesh</a>
                    </li>
                </ul>
            </div>
            <br />
        </div>
    );
};

export default AboutMePage;
