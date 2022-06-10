import React from 'react';
import './Homepage.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='hp-left'>
                <div className='hp-name'>
                    <span>Bonjour ! Je suis</span> 
                    <span>Karen Maciel</span>
                    <span>Développeur Frontend</span>
                    </div>
            

            <button className='button hp-button'>
                Hire me
            </button>
            <div className='hp-icons'>
                <a href='/https://github.com/karenbomer'><AiFillGithub /></a>
                <a href='https://fr.linkedin.com/'><AiFillLinkedin /></a>
            </div>
            </div>
            <div className='hp-right'>
                Hi
            </div>
        </div>
    );
};

export default Homepage;