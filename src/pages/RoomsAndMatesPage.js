// import { useEffect } from "react";
import "./ProjectPage.css";
import ArrowIcon from "./../assets/icons/arrow.png";
import { Link } from "react-router-dom";

import GoalTree from "../assets/images/rooms-and-mates/roomsandmates_goal_tree.png";
import Ideation from "../assets/images/rooms-and-mates/roomsandmates_ideation.jpg";
import IdentityDiagram from "../assets/images/rooms-and-mates/roomsandmates_identity_diagram.png";
import Storyboard from "../assets/images/rooms-and-mates/roomsandmates_storyboard.jpg";
import RoomsAndMatesUI from "../assets/images/rooms-and-mates/roomsandmates_ui.png";
import RoomsAndMatesVision from"../assets/images/rooms-and-mates/roomsandmates_vision.png";
import FrugalFreddy from "../assets/images/rooms-and-mates/frugal_freddy.png";
import KnowledgeableNancy from "../assets/images/rooms-and-mates/knowledgeable_nancy.png";
import OrganizedOwen from "../assets/images/rooms-and-mates/organized_owen.png";
import SocialSandy from "../assets/images/rooms-and-mates/social_sandy.jpg";

const RoomsAndMatesPage = () => {
    // useEffect( () => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <div>
            <div className="project-page">
                <div className="sidebar">
                    <ul className="contents">
                        <li className="list-item-no-link">Contents</li>
                        <li>
                            <a href="#overview">Overview</a>
                            <ul>
                                <li>
                                    <a href="#the-goal-tree">The Goal Tree</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#the-flow">The Flow</a>
                            <ul>
                                <li>
                                    <a href="#interviews-and-results">
                                        Interviews &amp; Results
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#ips">
                                Ideation, Personas &amp; Storyboards
                            </a>
                            <ul>
                                <li>
                                    <a href="#ideation">Ideation</a>
                                </li>
                                <li>
                                    <a href="#personas">Personas</a>
                                </li>
                                <li>
                                    <a href="#storyboards">Storyboards</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#wireframes">Wireframes</a>
                        </li>
                    </ul>
                </div>
                <div className="page-content">
                    <h2 className="project-page-title">
                        <span className="gradient-text">Rooms&amp;Mates</span>
                    </h2>
                    <p className="one">
                        This was a project undertaken in CPSC6140 - Human &amp;
                        Computer Interaction, under Dr. Bart Knijnenberg. Our
                        aim was to come up with an idea for a new application,
                        and design wireframes that would dictate how users would
                        interact with the app. I was part of Team 7 - The
                        Everyday Normans, along with Alexandra Adkins, Deyrel
                        Diaz, and Ryan Preston.
                    </p>
                    <h2 className="primary-project-heading">Overview</h2>
                    <p id="overview">
                        A major issue in moving to a new place, whether as a
                        student, a new employee, or simply for the adventure of
                        a new locale, is finding a place to live, and possibly
                        someone to live with. Many sites and apps attempt to
                        create a workflow to streamline this issue, but they all
                        have some underlying issues, some kind of a factor, that
                        prevents it from becoming the unquestionably best
                        option. Airbnb, with perhaps the best UI/UX of platforms
                        that fill this niche, primarily caters to short-term
                        stays; their platform very much reflects this and is,
                        therefore, a poor substitution for finding long-term
                        housing.
                    </p>
                    <p>Some popular ways of finding houses today are:</p>
                    <span className="rooms-and-mates-website">RoomDig</span>
                    <ul>
                        <li className="positive">
                            + Detailed member descriptions
                        </li>
                        <li className="positive">
                            + In-app messenger allowing direct contact with
                            clients
                        </li>
                        <li className="negative">
                            - Exclusively for college students
                        </li>
                    </ul>
                    <span className="rooms-and-mates-website">Apartments.com</span>
                    <ul>
                        <li className="positive">
                            + Well-established, with intuitive graphical UI to
                            visualize listings
                        </li>
                        <li className="negative">- Maintenance issues</li>
                        <li className="negative">
                            - Presence of old and inactive listings among other
                            listings
                        </li>
                    </ul>
                    <span className="rooms-and-mates-website">Reddit</span>
                    <ul>
                        <li className="positive">
                            + Social media platform offering direct
                            communication with people
                        </li>
                        <li className="negative">- Online anonymity</li>
                        <li className="negative">- Lack of timely replies</li>
                    </ul>
                    <span className="rooms-and-mates-website">
                        Roomster
                    </span>
                    <ul>
                        <li className="positive">
                            + Offers apartment searching and roommate searching
                        </li>
                        <li className="positive">
                            + Clean, clutter-free interface
                        </li>
                        <li className="negative">
                            - Making personal information an optional upload
                            makes it difficult to track legitimate users
                        </li>
                    </ul>
                    <h3 className="secondary-project-heading">The Goal Tree</h3>
                    <p id="the-goal-tree">
                        Now that we had a goal set in mind, we had to generate a
                        goal tree that would dictate the broad steps necessary
                        for every stage of the app, divided into either of the
                        two categories: finding a place to live, and finding a
                        roommate.
                    </p>
                    <figure className="goal-tree">
                        <img src={GoalTree} alt="Goal Tree for the app" />
                        <figcaption>Goal Tree for Rooms&amp;Mates</figcaption>
                    </figure>
                    <h2 className="primary-project-heading">The Flow</h2>
                    <p id="the-flow">
                        The main flow of our design process was enabled by the
                        interviews that we conducted and our subsequent
                        findings. The results are presented below.
                    </p>
                    <h3 className="secondary-project-heading">
                        Interviews &amp; Results
                    </h3>
                    <p id="interviews-and-results">
                        Before we could get started with any designs, we were
                        tasked with researching potential users. What could they
                        do with this app? How would they use this? What would
                        they search on this?
                    </p>
                    <figure>
                        <img src={Ideation} alt="White board containing key concepts" />
                        <figcaption>Compiling key concepts and questions</figcaption>
                    </figure>
                    <p>
                        The first step was to reach out to people belonging to
                        the target demographic. We conducted four interviews,
                        following which we generated the Affinity Diagram. Five
                        consolidated models were drawn from the compiled data of
                        the four interviews: a Day-In-The-Life model, a Decision
                        Point model, an Identity model, a Relationship model,
                        and a Sequence model.
                    </p>
                    <figure>
                        <img src={IdentityDiagram} alt="Identity Diagram" />
                        <figcaption>The Identity Diagram</figcaption>
                    </figure>
                    <h4>Did our focus change during the process?</h4>
                    <p>
                        Our primary foci, determined by the focus setting task,
                        address ensuring accurate information and user
                        satisfaction. These foci hold steady, but out
                        interpretation of the task itself has changed from
                        deriving solutions for multiple problems (finding
                        roommates and housing) to investigating solutions for a
                        single task (finding a place to live).
                    </p>
                    <h4>Did we find any surprising or unexpected results?</h4>
                    <p>
                        It was surprising to see that althrough looking for a
                        place to live is sometimes not the most fun, and is met
                        with a tight deadline and budget, people still put in a
                        lot of effort to make sure certain preference criteria
                        were met. Another surprising theme that we saw in all
                        interviwees were the judgments on the pictures shown for
                        the property.
                    </p>
                    <h2 id="ips" className="primary-project-heading">
                        Ideation, Personas &amp; Storyboards
                    </h2>
                    <p>
                        Following the results, we initiated our work on
                        presenting a concrete consolidated vision, user
                        personas, and storyboards, which would give us different
                        scenarios of our product in use.
                    </p>
                    <h3 className="secondary-project-heading">Ideation</h3>
                    <h4 id="ideation">Consolidated Vision</h4>
                    <p>
                        "All of a user's needs while searching for a place to
                        live are met by our design."
                    </p>
                    <figure>
                        <img src={RoomsAndMatesVision} alt="The vision board for the application" />
                        <figcaption>The vision board for our application</figcaption>
                    </figure>
                    <h4>Product Concepts</h4>
                    <p>
                        As we continued working on the design, we convened on
                        three key concepts which we opined would be critical for
                        the optimal functioning of the product:
                    </p>
                    <ol>
                        <li>
                            Being able to access the app website via a computer
                            or a mobile phone
                        </li>
                        <li>
                            Providing a 'preference survey' while searching for
                            a house
                        </li>
                        <li>
                            Show housing options of a given location as selected
                            by the user
                        </li>
                    </ol>
                    <h4>Evaluation of each product concept</h4>
                    <p>
                        Evaluation of each product concept was done by analyzing
                        how the product functioned and judging its performance
                        based on the following six factors:
                    </p>
                    <ol>
                        <li>Accomplishment</li>
                        <li>Connection</li>
                        <li>Identity</li>
                        <li>Sensation</li>
                        <li>Direct into action</li>
                        <li>The learning delta</li>
                    </ol>
                    <h3 className="secondary-project-heading">Personas</h3>
                    <p id="personas">
                        In order to understand how different types of users
                        would interact with the system, we came up with four
                        personas, each with different preferences, but
                        ultimately one common objective. These four personas
                        are:
                    </p>
                    <div className="rooms-and-mates-personas">
                    <figure>
                        <img src={FrugalFreddy} alt="Persona of Freddy" />
                        <figcaption><span>Frugal Freddy</span>: looking for options that strictly fit his price budget</figcaption>
                    </figure>
                    <figure>
                        <img src={KnowledgeableNancy} alt="Persona of Nancy" />
                        <figcaption><span>Knowledgeable Nancy</span>: looking for a virtual way to tour properties from within the comforts of her home </figcaption>
                    </figure>
                    <figure>
                        <img src={OrganizedOwen} alt="Persona of Owen" />
                        <figcaption><span>Organized Owen</span>: using the platform's 'Favorites' feature to sort through preselected listings </figcaption>
                    </figure>
                    <figure>
                        <img src={SocialSandy} alt="Persona of Sandy" />
                        <figcaption><span>Social Sandy</span>: taking advantage of the 'Review', 'Contact Agent', and 'Notes' features for an in-depth experience of the properties </figcaption>
                    </figure>
                    </div>
                    <h3 className="secondary-project-heading">Storyboards</h3>
                    <p id="storyboards">
                        Storyboards are a great way of visualizing a scenario
                        play out with a persona. It provides great insight into
                        the typical environment a user might be in while using
                        the product. A storyboard involving Frugal Freddy can be
                        seen below:
                    </p>
                    <figure>
                        <img src={Storyboard} alt="Viewing a user flow" />
                        <figcaption>Viewing a user flow</figcaption>
                    </figure>
                    <h2 className="primary-project-heading">Wireframes</h2>
                    <p id="wireframes">
                        Finally, with all the information in mind, we developed
                        a set of user interface designs to put the results of
                        our research into context. For creating these wireframes
                        for our application, we chose Balsamiq. Its low-fidelity
                        design and simple yet intuitive user interface provides
                        a wide range of standard UI frames for multiple
                        different types of devices. Since it also supports
                        multi-user live editing, it made for an ideal choice for
                        collaboration among us. The visual below contains a
                        subset of the 47 total wireframes designed.
                    </p>
                    <figure>
                        <img src={RoomsAndMatesUI} alt="Collection of different UI screens" />
                        <figcaption>A collection of different UI screens</figcaption>
                    </figure>
                    <div className="previous-and-next">
                        <div className="previous-project">
                            <Link to="/swipe">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing left"
                                />
                            </Link>
                            <p>Swipe</p>
                        </div>
                        <div className="next-project">
                            <Link to="/park-it">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing right"
                                />
                            </Link>
                            <p>ParkIt</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsAndMatesPage;
