import React from 'react'
import { useState, useEffect } from 'react';
import ShowMovie from './ShowMovie';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://movies-app1.p.rapidapi.com/api/movies',
        headers: {
            'X-RapidAPI-Key': '5b175a8ac2msh12f0bbd983ed12ap12bc13jsnf03c6b8bb734',
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
        }
    };

    const fetchMovie = async () => {
        const response = await axios.request(options)
        setMovies(response.data.results)
    }
    useEffect(() => {
        fetchMovie()
    }, [])
    return (
        <div className='flex flex-wrap justify-center bg-black'>

            {movies.map((movie, index) => (
                <div key={index} className="w-72">
                    <ShowMovie movie={movie} key={index} />
                </div>

            ))}

        </div>
    )
}

export default MovieList