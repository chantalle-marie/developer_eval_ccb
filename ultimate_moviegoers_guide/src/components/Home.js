import React, { useState } from 'react';
import {
    API_URL,
    API_KEY,
    API_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    IMAGE_BASE_URL,
} from '../config';

// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
    //const [{ state, loading, error }, fetchMovies] = useHomeFetch(); // Note: Can distructure the state to be more advanced. It's what's done below so I can remove the state.whatever below in my constructs
    const [
        { 
            state: { movies, currentPage, totalPages, heroImage }, 
            loading, 
            error 
        }, fetchMovies
    ] = useHomeFetch();
    const [searchTerm, setSearchTerm] = useState('');

    //console.log(state); // Before destructoring see line 25
    // Note: Former code in the repo to see the difference within the Grid component
    
    if(error) return <div>Somthing went wrong...</div>
    //if(!state.movies[0]) return <Spinner /> // Before destructoring see line 25
    if(!movies[0]) return <Spinner />

    return (
        <>
            <HeroImage
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                title={heroImage.original_title}
                text={heroImage.overview}
            />
            <SearchBar />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.origional_title}
                    />
                ))}
            </Grid>
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )    
}

export default Home;