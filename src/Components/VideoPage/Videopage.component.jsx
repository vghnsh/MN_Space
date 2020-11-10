import React, { useState ,useEffect} from 'react';
import {selectVideoid} from '../../Redux/mnslice';
import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import './VideoPage.css';
import {db} from '../../firebase';
import {Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";


function Videopage() {

    const videoId = useSelector(selectVideoid);
    const opts={
        playerVars:{
            autoplay:1,
        },
    };
    const history = useHistory();

    const [input,setInput]= useState('');
    const [comment,setComment]= useState([]);
    const [name,setName]= useState(null);


    useEffect(()=>{
       
        try{
            
            db.collection('comments').doc(videoId).collection('comment')
            .onSnapshot((snapshot)=>(
                setComment(snapshot.docs.map((doc)=>(doc.data()))
            )));
            setName(prompt("(Optional) Enter Your Name First else you wont be able to comment: "));
     
            
            
        }
        catch{
            history.push('/');
        }
      
      
        
    },[videoId]);

    console.log(comment);
    const handleinput=()=>{
        
         
    }

    const handleClick=(e)=>{
        e.preventDefault();
        
        db.collection('comments').doc(videoId).collection('comment').add({
            user:name,
            text:input
        });
        setInput('');
        //console.log(input);
    }
    
    return (
        <div className='utube'>

            <div className='utubev'>
            <YouTube  videoId={videoId} opts={opts}></YouTube>
            </div>

            <div className='data'>
                
                <div className='comments'>
                    <input value={input} onFocus={handleinput} onChange={(e)=>setInput(e.target.value)} className='input_video' placeholder='Comments...'>
                    
                    </input>
                    <div className='btn'>
                    <Button  variant="contained" color="primary" disabled={!(input && name)} value='Comment' onClick={handleClick}  >
                    
                    Comment

                    </Button>
                    </div>
                   
                    <div className='center'><h3>Hello {name}</h3> </div>
                    <div>
                        
                        {
                           comment?.map((cmt)=>(
                            <div className='comment'>
                                <div className='avatar'>
                                {cmt.user}
                                </div>
                                <div className='text'>
                                {cmt.text}
                                </div>
                                
                            </div>
                            
                           ))
                        }
                       
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Videopage;
