import React,{useEffect,useState} from 'react';
import axios from '../../axios';
import { selectSearch } from '../../Redux/mnslice';
import Playlistitem from '../PlayList_Item/Playlistitem.component';
import { useSelector } from 'react-redux';
import './Playlist.css';

function Playlist({fetchUrl}) {

    const [playList,setPlaList]= useState([]);
   // const [seacrh,setSearch]= useState(null);
    const Search= useSelector(selectSearch);

    useEffect(()=>{

        async function FetchD(){
            const request=await axios.get(fetchUrl);
            setPlaList(request.data);
            console.log(request.data);
            return request;
        } 
        FetchD();
        
    },[fetchUrl]);
    
    return (
        <div className="playlist">
            
           {
               Search === null || Search === '' ?

               playList?.items?.map((playList1)=>(
                <Playlistitem key={playList1?.id} {...playList1}/>
                 
            ))

               
            :
           
            playList?.items?.filter((playList1)=>(
                playList1?.snippet?.localized?.title.toLowerCase().indexOf(Search.toLowerCase()) !== -1   
            )).map((playList1)=>(
            <Playlistitem key={playList1?.id} {...playList1}/>
            ))
           } 
           
        </div>
    )
}

export default Playlist;