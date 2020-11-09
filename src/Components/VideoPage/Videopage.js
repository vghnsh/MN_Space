import React from 'react';
import {selectVideoid} from '../../Redux/mnslice';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import './VideoPage.css';

function Videopage() {

    const videoId = useSelector(selectVideoid);
    const opts={
        playerVars:{
            autoplay:1,
        },
    };

    
    return (
        <div className='utube'>

            <div className='utubev'>
            <YouTube  videoId={videoId} opts={opts}></YouTube>
            </div>

            <div className='data'>
                
                <div className='comments'>
                    <input className='input_video' placeholder='Comments...'>
                    
                    </input>
                    <button className='btn'>
                    Comments
                    </button>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Videopage;
