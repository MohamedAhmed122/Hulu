import React, { Fragment } from 'react';
import APIs from '../Utils/APIs'

import './style.css'

const Navbar =({setSelectedOption})=>{
    return(
        <Fragment>
            <nav className='nav'>
                <h2 onClick={()=>setSelectedOption(APIs.fetchTrending)}>Trending</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchTopRated)}>Top Rated</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchActionMovie)}>Action</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchComedyMovie)}>Comedy</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchHorrorMovie)}>Horror</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchRomanceMovie)}>Romance</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchMysteryMovie)}>Mystery</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchSciFiMovie)}>Sci-Fi</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchRomanceMovie)}>Animation</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchWestern)}>Western</h2>
                <h2 onClick={()=>setSelectedOption(APIs.fetchTV)}>TV Shows</h2>
            </nav>
        </Fragment>
    )
}
export default Navbar;