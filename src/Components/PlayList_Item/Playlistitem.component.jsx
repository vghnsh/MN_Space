import React from 'react';
import {Link } from 'react-router-dom';
//import {withRouter from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { playlistid } from '../../Redux/mnslice';

import './Playlist.css';

function Playlistitem({...playList1}) {
    const dispatch = useDispatch()
    return (
        <div className='bg' onClick={() => dispatch(
            playlistid({
                playlisttitle:playList1?.snippet?.title,
                playlistid:playList1?.id
            }),
           
           
        )}>

            <Link className='link' to="/Pvideo">
                <div className='baap'>

                    <div  className='Pthumb thumb' 
                    style={
                        {
                            backgroundImage:`url(${playList1?.snippet?.thumbnails?.medium?.url})`,
                            backgroundPosition:'center',
                            zoom: '113%',
                            
                            display:'flex'
                        }
                    }>
                    
                    <div className='thumb_title thumb'>
                    <div>
                        {
                        playList1?.snippet?.title.substring(0,13)
                        }
                        </div>
                        <div>
                        {
                        playList1?.snippet?.title.length > 12 ? <p>..</p> : ''
                        }
                        </div>    
                    </div>

                    </div>

                </div>
                   
                
                

                
               
               
            </Link>
        </div>
    )
}

export default (Playlistitem);

