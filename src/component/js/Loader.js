// import loadingg from "../images/loadingg.svg"
import load from "../images/load.gif"

function Loader() {
    return (

        <>
            <div className="loader">
                <img src={load} height={100} width={100}></img>
            </div>
        </>
    );
}
export default Loader;