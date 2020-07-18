import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='gaby-side'>
                <div className='gletter'>
                    <Link to={'/gaby'}> <span className='letter'>G</span> </Link>
                </div>
            </div>
            <div className='lisa-side'>
                <div className='lletter'>
                    <Link to={'/lisa'}> <span className='letter'>L</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
