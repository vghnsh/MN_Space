import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { videoid } from '../../Redux/mnslice';
import './Video.css';
import dateFormat from 'dateformat';
import Pulse from 'react-reveal/Pulse';



function Video({...video}) {

    const dispatch = useDispatch();
    
    return (

        <div>
            <Pulse>
        <div className='Video' onClick={() => dispatch(
            videoid({
                videoid:video?.snippet?.resourceId?.videoId ,
                
            })
        )}>
            <Link className='linkVid' to="/videoPg">
            
                <div className='img_class'>
                {
                    <img className='img' src={video?.snippet?.thumbnails?.medium?.url} alt='img'/>
                }
                </div>
                <div className='details'>
                    <div className='title_video'>
                    {
                    video?.snippet?.title
                    }
                    </div>
                   
                    <div className='date'>
                    {
                    dateFormat(video?.snippet?.publishedAt, "mmmm dS, yyyy")
                    }
                    </div>
                </div>
                
            
            
           
            </Link>
        </div>
        </Pulse>
        </div>
    )
}

export default Video;
