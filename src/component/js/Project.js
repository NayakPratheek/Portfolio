import "../css/Project.css";
import musicbee from '../images/musicbee.png'
import code from '../images/code.jpg'
import { Link } from "react-router-dom";

function Project() {


    return (
        <>
            <div className="project">
                <h1>Projects</h1>
                <h3>My works🗒️</h3>
                <div className="proj">
                    <div className="pro1">
                        <img src={musicbee} alt="project1"></img>
                        <div className="content">
                            <h3>MusicBee</h3>
                            <a href="https://nayakpratheek.github.io/MusicBee/" target="_blank">Visit site &#10064;</a>
                        </div>
                    </div>
                    <div className="pro2">
                        <img src={code} alt="project2"></img>
                        <div className="content">
                            <h3>Live Code Editor</h3>
                            <a href="https://code-editorlive.netlify.app/" target="_blank">Visit site &#10064;</a>
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
}

export default Project;