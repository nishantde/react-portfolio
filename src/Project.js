import { Link } from "react-router-dom";
import "./Project.css";
import ArrowIcon from "./assets/icons/arrow.png";

const Project = ({ props }) => {
    return (
        <div className="project">
            <div className="project-image">
                <img
                    src={props.imageSource}
                    alt={props.imageAlt}
                    title={`${props.projectTitle} Header Image`}
                />
            </div>
            <div className="project-details">
                <div className="project-title">{props.projectTitle}</div>
                <div className="project-intro">{props.projectIntro}</div>
                {/* <div className="project-link">{props.projectLink}</div> */}
                <div className="project-link">
                    <Link to={props.projectLink}>
                        <img src={ArrowIcon} alt="Icon of an arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;
