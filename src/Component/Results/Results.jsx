import React, { useState, useEffect } from 'react'


import './Styles.css'
import VideoCard from '../VideoCard/VideoCard'
import './Styles.css'
import APIs from '../Utils/APIs'
import AxiosInstance from '../Utils/Requests'

const Results =()=>{
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        const fetchData =async()=>{
            const request = await AxiosInstance.get(APIs.fetchActionMovie)
            setMovies(request.data.results);
           console.log(request.data.results);
        }
        fetchData();
    },[])
    return(
        <section className='results'>
            {
              movies.map(movie => <VideoCard movie={movie} key={movie.id}/>)  
            }
        </section>
    )
}
export default Results