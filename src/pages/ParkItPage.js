import "./ProjectPage.css";

// import { useEffect } from "react";
import { Link } from "react-router-dom";

import ParkItUI from "../assets/images/park-it/parkit_ui.png";
import ParkItVBoard from "../assets/images/park-it/parkit_vboard.png";
import ArrowIcon from "../assets/icons/arrow.png";

const ParkItPage = () => {
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
                            <a href="#interdisciplinary-facets">
                                Interdisciplinary Facets
                            </a>
                        </li>
                        <li>
                            <a href="#components">Components</a>
                            <ul>
                                <li>
                                    <a href="#mobile-ui">Mobile UI</a>
                                </li>
                                <li>
                                    <a href="#visualization-and-display-boards">
                                        Visualization &amp; Display Boards
                                    </a>
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
                        <span className="gradient-text">ParkIt</span>
                    </h2>
                    <p className="one">
                        This was a project undertaken in HCC8310 - Fundamentals
                        of Human-Centered Computing, under Dr. Brygg Ullmer. I
                        worked on this project with Deyrel Diaz, and our aim was
                        to design an application that would assist students with
                        their parking needs by first understanding the process
                        from afar and then formulating a solution that would not
                        only alleviate the issues but also prove to be a viable
                        implementation.
                    </p>
                    <h2 className="primary-project-heading" id="objective">
                        Objective
                    </h2>
                    <p>
                        Finding an optimal space for cars can be a challenging
                        task. In spaces that experience daily traffic, managing
                        the flow of vehicles to and from densely populated areas
                        such as parking lots becomes extremely important to make
                        sure that this flow does not disrupt external traffic.
                        Our objective with ParkIt was to propose a system that
                        utilizes the concept of spot-reservation and
                        confirmation and conveys information intuitively, making
                        use of visual representation.
                    </p>
                    <h2 className="primary-project-heading" id="interdisciplinary-facets">
                        Interdisciplinary Facets
                    </h2>
                    <p>
                        Our proposed system aims to delve deeper into three
                        major interdisciplinary domains to create a more viable,
                        human-centered solution: Computer Science, Graphic
                        Design, and Human Factors. Software is made by keeping
                        people in mind; however, it ends up increasing the
                        workload of its users by having them spend time
                        understanding the product. Incorporating the computer
                        science principles of graphic and visual design enables
                        developers to make applications that are
                        easy-to-understand, as well as easy-to-use.
                    </p>
                    <h2 className="primary-project-heading" id="components">Components</h2>
                    <p>
                        There are two primary components to this system; the
                        mobile user interface, and the display and visualization
                        boards.
                    </p>
                    <h3 className="secondary-project-heading" id="mobile-ui">
                        Mobile UI
                    </h3>
                    <p>
                        ParkIt was designed to employ Global Positioning System
                        &#40;GPS&#41; sosftware to connect to a cloud-based
                        network which would then directly interact with the
                        display and visualization boards present throughout
                        nearby parking lots. The mobile application lets
                        students choose the parking spot they would like to park
                        in.
                    </p>
                    <p>
                        The app could also recommend the most efficient spot
                        based on the users' past behaviors to minimize the time
                        it took for them to walk from their vehicles to the
                        buildings where their classes were held, thereby
                        maximizing efficiency.
                    </p>
                    <p>
                        Next, users would be given the choice of selecting the
                        time slots in which they would be occupying their
                        selected spot. Once they were done with the selection
                        process, they could complete the procedure and reserve
                        their parking spot. While they are driving towards the
                        reserved spot, the application would calculate the
                        users' position and alert the driver if they were
                        detected to be within one mile of the parking lot. The
                        users were required to confirm their presence after
                        parking their vehicle, after which they would be allowed
                        to be there for the duration of their reservation, or
                        extend it until later if the need arose. This was done
                        to prevent people from taking up spots that they would
                        not be needing.
                    </p>
                    <h3
                        className="secondary-project-heading"
                        id="visualization-and-display-boards"
                    >
                        Visualization &amp; Display Boards
                    </h3>
                    <p>
                        The Visualization Board &#40;VBoard&#41; helps with
                        conveying useful information about nearby parking lots.
                        The open space it would be installed in can improve
                        optimality while still displaying relevant data. Since
                        the VBoard does not take up space on the roads, drivers
                        can use their time efficiently while sitting in traffic
                        to decide whether they want to wait in line for the
                        current parking lot or choose a different option.
                    </p>
                    <p>
                        The VBoard shows the parking lot in a grid-like format.
                        It uses visual representations and colors to notify
                        people whether particular spots are available or not.
                        Each spot on the grid is mapped to a real-world parking
                        spot. The VBoard will also cycle between other parking
                        lots present nearby. The grid consists of three colors
                        that represent the state of each parking spot at any
                        given time. Green boxes are used to indicate available
                        spots, meaning that those spots are open and can be used
                        to park a vehicle. Yellow boxes represent spots that are
                        open, but unavailable due to prior reservation. Red
                        boxes show those spots that are unavailable due to prior
                        reservation. Red boxes show those spots that are
                        unavailable, being currently occupied by a vehicle.
                        These colors have been chosen in order to ensure that
                        the VBoard will disseminate critical information without
                        requiring constant focus. These gradients can easily be
                        picked up in the user's peripheral vision.
                    </p>
                    <figure>
                        <img src={ParkItVBoard} alt="The Visualization Board and a render on a road" />
                        <figcaption>A render of the VBoard</figcaption>
                    </figure>
                    <p>
                        The Display Board &#40;DBoard&#41; works in tandem with
                        the VBoard. It is located near the entrance of a each
                        parking lot, and provides a way for users &#40;who
                        haven't done prior reservation&#41; to reserve a spot.
                        In such cases, the second step of location detection
                        would not be needed, seeing as the vehicle is already
                        present in the vicinity of the desired location. The
                        second purpose that the DBoard serves is that of
                        optional assistance. For people unfamiliar with the
                        parking lot, it offers a choice for enabling guiding
                        lights, which would then assign a random color and light
                        the LEDs located on the side of the road to the
                        designated spot.
                    </p>
                    <h2 className="primary-project-heading" id="wireframes">
                        Wireframes
                    </h2>
                    <p>
                        Once we had an initial idea in mind about how we thought
                        the application would function, it was time to implement
                        those ideas visually via wireframes. We chose Figma for
                        this project, since it was a high-fidelity and intuitive
                        design tool that provided us with a wide variety of
                        device types and device sizes. Since we intended for our
                        system to be used on the go, we finalized on a mobile
                        UI, and accordingly mapped out the corresponding user
                        interface layout.
                    </p>
                    <figure>
                        <img src={ParkItUI} alt="Mobile UI for ParkIt" />
                        <figcaption>Mobile UI for ParkIt</figcaption>
                    </figure>
                    <div className="previous-and-next">
                        <div className="previous-project">
                            <Link to="/rooms-and-mates">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing left"
                                />
                            </Link>
                            <p>Rooms&amp;Mates</p>
                        </div>
                        <div className="next-project">
                            <Link to="/vcfzs">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing right"
                                />
                            </Link>
                            <p>VCFZS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParkItPage;
