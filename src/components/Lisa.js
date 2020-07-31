import React from 'react';
import { Link } from 'react-router-dom';
import './Lisa.scss'

const Lisa = () => {
    return (
        <div className='dashboardl'>
          Lisa, This is your Dashboard. 
           <div className="linkcontainer">
                <div className="upload">
                    From here you can upload a new Craft <br/>
                    <Link to={'/lform'}>Upload Form</Link>
                </div>

                <div className="index">
                    Index view to see everything you have uploaded. <br/>
                    <Link to={'/lindex'}>Index View</Link>
                </div>
            </div>   
        </div>
    );
}

export default Lisa;
