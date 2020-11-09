import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import './Count.css';

function Count({fetchUrl}) {

    const [count,setCount]= useState([]);

    useEffect(()=>{
        async function FetchD(){
            const request=await axios.get(fetchUrl);
            setCount(request.data);
            
            return request;  
        } 
        FetchD();
    },[fetchUrl]);
    //console.log(count);
    return (
        <div className='count center thumb'>
            Subscribers :  
            {
                count?.items?.[0]?.statistics?.subscriberCount
            }
        </div>
    )
}

export default Count;
