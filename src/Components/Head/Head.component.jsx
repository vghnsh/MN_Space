import React from 'react';
import './Head.css';
import {Link} from 'react-router-dom';

function Head() {
    return (
        <div>
            <Link className='link' to='/'>
            <div className='top'>
          
          <div className='Racing center mn_size'>
            MN Space
          </div>
        <div className='tag center tagline_size'>
          MUMBIKER NIKHIL
        </div>
      </div>
            </Link>
        </div>
        
    )
}

export default Head;
