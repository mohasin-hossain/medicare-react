import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id='banner'>
            <h1>THE <span>RIGHT</span> <br /> PEDIATRICIAN</h1>
            <p>We at MediCare are always fully focused on helping <br /> your child and you to overcame any hurdle or any other problem.</p>
           <div className="btns">
                <button>More details</button>
                <button>Book appointment <FontAwesomeIcon className='right-icon' icon={faArrowRight} /></button>
           </div>
        </div>
    );
};

export default Banner;