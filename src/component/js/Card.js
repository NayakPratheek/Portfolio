import musicbee from '../images/musicbee.png'
import code from '..//images/code.jpg'
import '../css/Card.css'
function Card({ pro }) {
    const img = (value) => {
        if (value === 'm') {
            return musicbee;
        }
        if (value === 'c') {
            return code;
        }
    }
    return (
        <>
            <div className='poj'>
                <img src={img(pro.i)}></img>
                <div className='content'>
                    <h2>{pro.h}</h2>
                    <a href={pro.a} target='blank'>View Website</a>
                </div>
            </div>
        </>
    );
}
export default Card;