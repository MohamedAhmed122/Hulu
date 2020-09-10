import React from 'react'
import TextTruncate from 'react-text-truncate';
import './Styles.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const VideoCard =({movie})=>{
    return(
        <section className='video-card'>
            <img src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
            <TextTruncate
            line={1}
            element="p"
            truncateText="…"
            text={movie.overview}
            // textTruncateChild={<a href="#">Read on</a>}
            />
            <h2>{movie.title || movie.original_title}</h2>
            <p  style={{color: '#2196f3',fontSize: '1.7rem', marginLeft:'0.5rem'}}>{movie.vote_count} <ThumbUpAltIcon /> </p>
        </section>
    )
}
export default VideoCard;