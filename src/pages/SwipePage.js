import "./ProjectPage.css";

// import { useEffect } from "react";
import { Link } from "react-router-dom";

import CollectionsCrop from "../assets/images/swipe/collections-crop.png";
import PostsCrop from "../assets/images/swipe/posts-crop.png";
import SpotlightCrop from "../assets/images/swipe/spotlight-crop.png";
import SketchOne from "../assets/images/swipe/sketch-1.png";
import SketchTwo from "../assets/images/swipe/sketch-2.png";
import ViewPostWireframe from "../assets/images/swipe/view-post-wireframe.png";
import ViewPostUI from "../assets/images/swipe/view-post-ui.png";
import CollectionsWireframe from "../assets/images/swipe/collections-wireframe.png";
import CollectionsUI from "../assets/images/swipe/collections-ui.png";
import ArrowIcon from "../assets/icons/arrow.png";

const SwipePage = () => {
    /* To have this effect play after every component render - but does not work */
    // useEffect( () => {
    //     window.scrollTo(0, 0);
    // });

    return (
        <div className="swipe-page">
            <div className="project-page">
                <div className="sidebar">
                    <ul className="contents">
                        <li className="list-item-no-link">Contents</li>
                        <li>
                            <a href="#objective">Objective</a>
                        </li>
                        <li>
                            <a href="#approach">The Approach</a>
                        </li>
                        <ul>
                            <li>
                                <a href="#collections">Collections</a>
                            </li>
                            <li>
                                <a href="#posts">Posts</a>
                            </li>
                            <li>
                                <a href="#pages">Pages</a>
                            </li>
                            <li>
                                <a href="#spotlight-and-ambassadors">
                                    Spotlight &amp; Ambassadors
                                </a>
                            </li>
                        </ul>
                        <li>
                            <a href="#research">Research</a>
                        </li>
                        <li>
                            <a href="#sketches-and-wireframes">
                                Sketches &amp; Wireframes
                            </a>
                        </li>
                        <li>
                            <a href="#prototype">The Prototype</a>
                        </li>
                    </ul>
                </div>
                <div className="page-content">
                    <h2 className="project-page-title" id="project-swipe">
                        <span className="gradient-text">Swipe</span>
                    </h2>
                    <p className="one">
                        Swipe is a concept for a website that serves as a
                        central hub for events, communities, and groups online.
                        It was created as part of Adobe&#39;s College + Twitch
                        Jam held in March 2021. I participated in this
                        competition with Jaitra Dixit, and we were tasked with
                        developing a prototype that would provide the complete
                        experience of using the platform.
                    </p>
                    <h2 className="primary-project-heading" id="objective">
                        Objective
                    </h2>
                    <p>
                        Our objective, as stated in the Jam Brief, was to design
                        a &#39;third-party desktop app or website that serves as
                        a single-stop resource for any media related to a topic
                        and encourages users to find new interests, events, and
                        communities.&#39; The first thing that came to mind was
                        a website that would function similarly to how social
                        media applications work; in such a case, content
                        creation and community engagement would be important.
                    </p>
                    <h2 className="primary-project-heading" id="approach">
                        The Approach
                    </h2>
                    <p>
                        Our approach mainly revolved around the inclusion of
                        certain key elements that would help tie the whole
                        product together. These revolved around collections,
                        posts, pages, spotlights, and ambassadors.
                    </p>
                    <p>
                        With Swipe, we intended to provide a platform for two
                        major concepts: content creation and community
                        engagement. However, we wanted it to do so without
                        having to definitively divide its user base into either
                        of those two roles. Users who created content could
                        garner followers who could interact with the content,
                        provide feedback, and elicit further discussion.
                    </p>
                    <h3 className="secondary-project-heading" id="collections">
                        Collections
                    </h3>
                    <p>
                        The next point to note is the notion of collections. We
                        define this to be an accumulation of a person&#39;s
                        interests, hobbies, and to-dos. Collections exist for
                        everyone and can be both public as well as private. The
                        former would be visible to other people who visit a
                        user&#39;s page, whereas the latter would be hidden from
                        everyone but the user themself. They could be toggled at
                        any time as per the users&#39; choice.
                    </p>
                    <p>
                        Collections can be thought of as an expanse where people
                        can pen their notes but can also do so much more. People
                        can create multiple collections, dividing them up
                        however they see fit. Within each collection, they have
                        the option of creating sub-collections and so on,
                        providing a meaningful hierarchy that makes tracking and
                        finding content easy. The content inside these
                        collections can include different media formats, ranging
                        from text to images and videos. With the push of a
                        button, users can publish their content, creating a
                        public post that other people can view and interact
                        with.
                    </p>
                    <figure>
                        <img src={CollectionsCrop} alt="The Collections component of Swipe" />
                        <figcaption>The Collections component of Swipe</figcaption>
                    </figure>
                    <h3 className="secondary-project-heading" id="posts">
                        Posts
                    </h3>
                    <p>
                        A user wishing to share their recipe for macarons can
                        choose to make a post. This post can be as simple as a
                        text recipe or a detailed write-up consisting of videos,
                        images, and GIFs. Below every post, there would be a
                        discussion section, where people can offer comments,
                        rate the creator&#39;s post, and save it so that it is
                        visible in their collections.
                    </p>
                    <figure>
                        <img src={PostsCrop} alt="The Posts component of Swipe" />
                        <figcaption>The Posts component of Swipe</figcaption>
                    </figure>
                    <h3 className="secondary-project-heading" id="pages">
                        Pages
                    </h3>
                    <p>
                        In addition to a discussion/comment section being
                        available for every post, there could be a discussion
                        section present on every user&#39;s personal profile.
                        Additionally, this page would summarize what the user
                        has posted, and any community engagement instances they
                        might be a part of.
                    </p>
                    <h3
                        className="secondary-project-heading"
                        id="spotlight-and-ambassadors"
                    >
                        Spotlight &amp; Ambassadors
                    </h3>
                    <p>
                        Each month, the product would have a spotlight over a
                        particular topic, where notable creations and posts will
                        be discussed. Spotlights will have associated with them
                        a series of ambassadors, who have been voted by the
                        public to provide a voice on the chosen topic and spread
                        awareness.
                    </p>
                    <figure>
                        <img src={SpotlightCrop} alt="Viewing spotlights" />
                        <figcaption>Spotlight users being shown on the home page</figcaption>
                    </figure>
                    <h2 className="primary-project-heading" id="research">
                        Research
                    </h2>
                    <p>
                        As part of the UX lifecycle, we conducted interviews to
                        find people&#39;s opinions on the existing websites that
                        provide a platform for content creation. We then
                        analyzed popular social media and blogs. At this point,
                        we wanted to ask ourselves essential questions: what
                        makes them work? How does it work? How do they implement
                        these features together?
                    </p>
                    <p>
                        We wanted to make a website that provided the reach that
                        social media websites provide, but without <i>explicitly</i> making it a social media. Social media
                        websites are vast in their applicability. While its
                        reach is undeniable, there are a lot of factors that
                        contribute to its efficient functioning. Allowing
                        ourselves to not rely on a typical social media-esque
                        design format, allowed us some creative freedom to
                        explore how we could bring together our concepts.
                    </p>
                    <p>
                        As part of our analysis, we found common services among
                        these popular websites. We then compiled our research
                        and interview findings using sticky notes via Miro.
                        Since we had a limited amount of time to finish the
                        product &#40;plus a team of only two members&#41;, we
                        decided to progress with the two interviews and their
                        subsequent findings.
                    </p>
                    <h2
                        className="primary-project-heading"
                        id="sketches-and-wireframes"
                    >
                        Sketches &amp; Wireframes
                    </h2>
                    <p>
                        We initially designed low-fidelity sketches to integrate
                        our ideas and our findings. Then, we iteratively
                        improved the design elements of our low-fidelity
                        sketches before designing fully realized high-fidelity
                        designs.
                    </p>
                    <figure>
                        <img src={SketchOne} alt="Wireframe for viewing posts" />
                        <img src={SketchTwo} alt="Wireframe for engagement on a post" />
                        <figcaption>Wireframes for viewing posts and engagement on a post</figcaption>
                    </figure>
                    <h2 className="primary-project-heading" id="prototype">
                        The Prototype
                    </h2>
                    <p>
                        The competition required us to use Adobe XD to devise a
                        prototype for our desired system. As such, we designed
                        high-fidelity wireframes using XD first. This was done
                        in order to assess the visual &#39;viability&#39; of our
                        low-fidelity designs and to improve upon them using
                        actual design elements. Using key design principles such
                        as color theory, typography, and hierarchy was
                        essential; the product was designed to be useful as well
                        as visually and aesthetically appealing.
                    </p>
                    <figure>
                        <img src={CollectionsWireframe} alt="Wireframe of the Collections component of Swipe" />
                        <img src={ViewPostWireframe} alt="Wireframe of the Posts component of Swipe" />
                        <figcaption>Wireframes: Low-fidelity</figcaption>
                    </figure>
                    <figure>
                        <img src={CollectionsUI} alt="User Interface for the Collections component of Swipe" />
                        <img src={ViewPostUI} alt="User Interface of the Posts component of Swipe" />
                        <figcaption>User Interface: High-fidelity</figcaption>
                    </figure>
                    <p>
                        After the high-fidelity wireframes were made, we
                        connected the necessary screens to form a prototype with
                        a proper flow.
                    </p>
                    <div className="previous-and-next">
                        <div className="previous-project">
                            <Link to="/vcfzs">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing left"
                                />
                            </Link>
                            <p>VCFZS</p>
                        </div>
                        <div className="next-project">
                            <Link to="/rooms-and-mates">
                                <img
                                    src={ArrowIcon}
                                    alt="Icon of an arrow pointing right"
                                />
                            </Link>
                            <p>Rooms&amp;Mates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwipePage;
