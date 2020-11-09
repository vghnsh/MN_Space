
//import {PlayList_id} from './Components/PVideo/Pvideo.component';
const Api_key="AIzaSyAZ8BPizSNkyCENAo5535HK4WBv0MkY3nw";
// const Api_key="AIzaSyAZ8BPizSNkyCENAo5535HK4WBv0MkY3nw";
const Requests={
    PlayList : `/playlists?part=snippet&channelId=UCNn6AaHharXIbkRleXGboiQ&maxResults=50&key=${Api_key}` ,
    Count:`/channels?part=statistics&id=UCNn6AaHharXIbkRleXGboiQ&key=${Api_key}`,
    
    
}

export  {Requests,Api_key};