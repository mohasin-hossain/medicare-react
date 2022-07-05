import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div id='banner'>
            <h1>THE <span>RIGHT</span> PEDIATRICIAN</h1>
            <p className='banner-details'>We at MediCare are always fully focused on helping your child and you to overcame any hurdle or any other problem.</p>
           <div className="btns">
                <button>More details</button>
                <Link to='/appointment'>Book appointment <FontAwesomeIcon className='right-icon' icon={faArrowRight} /></Link>
           </div>
        </div>
    );
};

export default Banner;