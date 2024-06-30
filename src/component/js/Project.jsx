import "../css/Project.css";
import musicbee from '../images/musicbee.png'
import code from '../images/code.jpg'
import hh1 from '../images/hh1.png'
import sec from '../images/secure.png'
import { Link } from "react-router-dom";
import Card from "./Card";

function Project() {
    const pro = [
        {
            id: 3,
            i: 'h',
            h: "Helping Hands",
            a: "https://helping-hands-kappa.vercel.app/"
        },
        {
            id: 1,
            i: 's',
            h: "Secure Force",
            a: "https://secure-force.vercel.app/"
        },
        {
            id: 2,
            i: 'c',
            h: "Live Code Editor",
            a: "https://code-editorlive.netlify.app/"
        },
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