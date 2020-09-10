import React, { useState, useEffect } from "react";

import "./Styles.css";
import VideoCard from "../VideoCard/VideoCard";
import "./Styles.css";
import APIs from "../Utils/APIs";
import AxiosInstance from "../Utils/Requests";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
        const request = await AxiosInstance.get(
            selectedOption || APIs.fetchTrending
        );
        setMovies(request.data.results);
        console.log(request.data.results);
        };
        fetchData();
    }, [selectedOption]);
    return (
        <section className="results">
            <FlipMove>
                {movies.map((movie) => (
                <VideoCard movie={movie} key={movie.id} />
                ))}
            </FlipMove>
        </section>
  );
};
export default Results;
