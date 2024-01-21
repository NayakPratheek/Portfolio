import "../css/Project.css";
import musicbee from '../images/musicbee.png'
import code from '../images/code.jpg'
import hh1 from '../images/hh1.png'
import { Link } from "react-router-dom";
import Card from "./Card";

function Project() {
    const pro = [
        {
            id: 1,
            i: 'm',
            h: "MusicBee",
            a: "https://nayakpratheek.github.io/MusicBee/"
        },
        {
            id: 2,
            i: 'c',
            h: "Live Code Editor",
            a: "https://code-editorlive.netlify.app/"
        },
        {
            id: 3,
            i: 'h',
            h: "Helping Hands",
            a: "https://helping-hands-kappa.vercel.app/"
        }
    ]

    return (
        <>
            <div className="project">
                <h1>Projects</h1>
                <h3>My works🗒️</h3>
                <div className="proj">
                    {
                        pro.map((item) => (
                            <Card pro={item} />
                        ))
                    }

                </div>
            </div >
        </>
    );
}

export default Project;