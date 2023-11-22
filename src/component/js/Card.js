import '../css/Project.css'


function Card({ Project }) {
    return (
        <>
            <img src={Project.i}></img>
            <div className='content'>
                <h3>{Project.h}</h3>
                <a>{Project.a}</a>
            </div>

        </>
    );

}
export default Card;