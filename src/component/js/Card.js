import musicbee from '../images/musicbee.png'
import code from '..//images/code.jpg'
import hh1 from '../images/hh1.png'
import sec from '../images/secure.png'
import '../css/Card.css'
function Card({ pro }) {
    const img = (value) => {
        if (value === 's') {
            return sec;
        }
        if (value === 'c') {
            return code;
        }
        if (value === 'h') {
            return hh1;
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