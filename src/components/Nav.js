import React from 'react';
import './Nav.css';

const Nav = () => {
    return (
        <div className='wrapper'>
            <div className='left-wrapper'>
                <div className='wrapper-name'>Karen</div>
                <span>toggle</span>
            </div>
            <div className='right-wrapper'>
            <div className='wrapper-list'>
                <ul style={{listStyleType:'none'}}>
                    <li>Home</li>
                    <li>Experiences</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button'>
                Contact
            </button>
            </div>
        </div>
    );
};

export default Nav;