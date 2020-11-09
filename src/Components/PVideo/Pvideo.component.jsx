import React, { useEffect, useState } from 'react';
//import {useLocation} from 'react-router-dom';
import {Api_key} from '../../Requests';
import axios from '../../axios';
import Video from '../Video/Video.component';
import { selectPlaylistid } from '../../Redux/mnslice';
import { useSelector } from 'react-redux';

import { selectPlaylisttitle } from '../../Redux/mnslice';
import './Video.css'

function Pvideo() {

    const Playlistid= useSelector(selectPlaylistid);

    const [PlayListVid,setPlaListVid]=useState([]);
    const Playlisttitle= useSelector(selectPlaylisttitle);

   
   // const [id,setId]=useState([]);
    
    useEffect(()=>{
        
        async function FetchD(){
            const request=await axios.get(`/playlistItems?part=snippet&maxResults=50&playlistId=${Playlistid}&key=${Api_key}`);
            setPlaListVid(request.data);
            console.log(request.data);
            return request;

            
        } 
        FetchD();
       
    },[Playlistid]);

    return (
        <div className='Pvideo'>
            <div className='PlayList_name'>
            {
                Playlisttitle
            }
            </div>
            {
                PlayListVid?.items?.map((video)=>(
                    <Video key={video?.id} {...video} > </Video>
                ))
            }
        </div>
    )
}

export default Pvideo;
