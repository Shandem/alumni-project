import React from 'react';
import { Link } from 'react-router-dom';
import './Gaby.scss'

const Gaby = () => {
    return (
        <div className='dashboardg'>
            Gaby, This is your Dashboard. 
           <div className="linkcontainer">
                <div className="upload">
                    From here you can upload a new Craft <br/>
                    <Link to={'/gform'}>Upload Form</Link>
                </div>

                <div className="index">
                    Index view to see everything you have uploaded. <br/>
                    <Link to={'/gindex'}>Index View</Link>
                </div>
            </div>   
        </div>
    );
}

export default Gaby;
