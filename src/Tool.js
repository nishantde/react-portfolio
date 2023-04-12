import "./Tool.css";

const Tool = ({props}) => {
    return (<div className="tool">
        <div className="tool-logo"><img src={props.toolLogo} alt={props.imageAlt}/></div>
        <div className="tool-name">{props.toolName}</div>
    </div>)
}

export default Tool;