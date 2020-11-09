import { createSlice } from '@reduxjs/toolkit';

export const mnSlice = createSlice({
    name: 'playlist',

    initialState: {
        playlistid: [],
        playlisttitle:[],
        videoid:[],
        search:null,
    },
    
    reducers: {
        
        playlistid: (state, action) => {
            state.playlistid = action.payload.playlistid;
            
            state.playlisttitle = action.payload.playlisttitle;
        },
       
        videoid: (state,action) => {
            state.videoid = action.payload.videoid;
        },
        search :(state,action)=>{
            state.search = action.payload.search;
        }
    },
});

export const { playlistid,playlisttitle, videoid ,search} = mnSlice.actions;

export const selectPlaylistid = (state) => state.playlist.playlistid;
export const selectPlaylisttitle=(state)=>  state.playlist.playlisttitle;
export const selectVideoid = (state) => state.playlist.videoid;
export const selectSearch = (state) => state.playlist.search;

export default mnSlice.reducer;
