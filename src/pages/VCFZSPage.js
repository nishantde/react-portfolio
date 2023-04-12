import "./ProjectPage.css";

// import { useEffect } from "react";
import { Link } from "react-router-dom";

import VCFZSAlertUI from "../assets/images/vcfzs/vcfzs_alert_ui.png";
import VCFZSUI from "../assets/images/vcfzs/vcfzs_ui.png";
import ArrowIcon from "../assets/icons/arrow.png";

const VCFZSPage = () => {
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
                            <a href="#objective">Objective</a>
                        </li>
                        <li>
                            <a href="#requirement-analysis">
                                Requirement Analysis
                            </a>
                        </li>
                        <li>
                            <a href="#stakeholders">Stakeholders</a>
                        </li>
                        <li>
                            <a href="#key-features">Two Key Features</a>
                        </li>
                        <li>
                            <a href="#user-interface">User Interface</a>
                        </li>
                    </ul>
                </div>
                <div className="page-content">
                    <h2 className="project-page-title">
                        <span className="gradient-text">
                            VCFZS - Virtual Car-Free Zone System
                        </span>
                    </h2>
                    <p className="one">
                        This was a project undertaken in CPSC8710 - Foundations
                        of Software Engineering, taught by Dr. Murali Sitaraman.
                        I undertook this semester-long project with two other
                        team members: Dhananjay Nikam and Tonique Dennis. We
                        were tasked with understanding the different parties
                        that would be involved with the creation of car-free
                        zones, and the process involved in doing so virtually
                        using a software or tool. We researched the needs of
                        such a zone, existing implementations, execution cost,
                        stakeholders, and finally designed a set of
                        high-fidelity web-based prototypes for the clients who
                        would be using this tool.
                    </p>
                    <h2 className="primary-project-heading" id="objective">
                        Objective
                    </h2>
                    <p>
                        Vehicular emissions of smoke have adverse health effects
                        that could lead to a multitude of dangerous and chronic
                        complications. This, coupled with the primary usage of
                        fossil fuels to power such vehicles, makes up a deadly
                        combination of automotive technology that is continually
                        on the rise, using resources that are dwindling.
                    </p>
                    <p>
                        Car-free zones not only help in maintaining a healthy
                        population of foot-traffic but also to comply with
                        environmental regulations. Statistics say that the city
                        of London expended its yearly budget of Carbon Dioxide
                        emissions in the first month of 2018. If this were to be
                        a regular phenomenon instead of an outlier, so would the
                        need for the presence of more car-free zones.
                    </p>
                    <h2
                        className="primary-project-heading"
                        id="requirement-analysis"
                    >
                        Requirement Analysis
                    </h2>
                    <p>
                        We categorized requirements into functional and
                        non-functional. The former defined the constraints of
                        what a system could do, while the latter described the
                        limitations on how it could do it. Functional
                        requirements affect the functionality of the system
                        &#40;hence, the name&#41;, and therefore, they are
                        critical to the working of the product. Non-functional
                        requirements are not mandatory to address, but failing
                        to do so would have a severe impact on the product&#39;s
                        usability.
                    </p>
                    <p>Our requirements spanned five major areas:</p>
                    <ol>
                        <li>Notification System</li>
                        <li>Credentials</li>
                        <li>Database Connectivity</li>
                        <li>Subscription Model</li>
                        <li>Mapping Function</li>
                    </ol>
                    <h2 className="primary-project-heading" id="stakeholders">
                        Stakeholders
                    </h2>
                    <p>
                        We identified eleven key stakeholder groups for this
                        project, ranging from top management, event organizers,
                        and government agencies, to car owners, shopkeepers, and
                        residents. These stakeholders all have a direct impact
                        on how the zone would function.
                    </p>
                    <p>
                        We came up with a list of ten questions for each of the
                        eleven stakeholders in order to understand their needs
                        and expectations. An in-depth look into the answers also
                        helped in collecting possible relationships between
                        stakeholders, or among stakeholders and third parties.
                        For instance, city planners would expect the VCFZS
                        administrator to work closely with them to determine the
                        zones and provide the required permissions. City
                        planners, in turn, would be expected to coordinate with
                        government agencies and provide appropriate parking
                        spaces and facilities for the shopkeepers, and for the
                        event organizers to take their cargo from the border of
                        the CFZ to their respective spots.
                    </p>
                    <h2 className="primary-project-heading" id="key-features">
                        Two Key Features
                    </h2>
                    <p>
                        During the ideation phase and the requirement analysis
                        stage, there were two key features that were thought to
                        be crucial for the optimal functioning of the product:
                        block selection for zone marking, and notification
                        alerts for nearby citizens. The design of the former
                        includes manual zone marking via two methods: using the
                        mouse to select and drag zone end-points &#40;presented
                        on a map GUI&#41;, or using the keyboards to enter
                        coordinates. Prior to this, however, the system would
                        need the city/town/county location in order to retrieve
                        an accurate map. Notification alerts would work by
                        sending nearby users relevant information about the zone
                        being created. This would include the bounding streets
                        and avenues, parking allocations, and possible
                        additional restrictions.
                    </p>
                    <figure>
                        <img src={VCFZSAlertUI} alt="Two mobile screens showing the notification and message respectively" />
                        <figcaption>Sample screens showing the notification and the message received respectively</figcaption>
                    </figure>
                    <h2 className="primary-project-heading" id="user-interface">
                        User Interface
                    </h2>
                    <p>
                        The UI for this project was created using Figma. We
                        aimed to develop an interface with zone planners in
                        mind. As the party responsible for setting up these
                        virtual zones, they would need functionality from the
                        product that would allow them to set boundaries, manage
                        zones, and maintain a database of citizens and business
                        owners.
                    </p>
                    <figure>
                        <img src={VCFZSUI} alt="A collection of screens showing the UI" />
                        <figcaption>A collection of screens showing the UI</figcaption>
                    </figure>
                    <div className="previous-and-next">
                        <div className="previous-project">
                            <Link to="/park-it">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing left"
                                />
                            </Link>
                            <p>ParkIt</p>
                        </div>
                        <div className="next-project">
                            <Link to="/swipe">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing right"
                                />
                            </Link>
                            <p>Swipe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VCFZSPage;
