import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { search } from '../../Redux/mnslice';

import { selectSearch } from '../../Redux/mnslice';
import { useSelector } from 'react-redux';
import './Search.css';

function Search() {

//    const [search,setSeacrh]= useState([]);
    const dispatch = useDispatch();
    const Search= useSelector(selectSearch); 

    const  handleChange=(e)=>{
        
        dispatch(
            search(
                {
                    search : e.target.value
                })
        )
        
        
    }
    console.log(search)

    return (
        <div className='search'>
            <input className='input' onChange={handleChange} placeholder='Search Playlist...' value={Search}  ></input>
        </div>
    )
}

export default Search
