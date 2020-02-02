import React, { useState } from 'react';
import {
    POPULAR_BASE_URL,
    SEARCH_BASE_URL,
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

    const searchMovies = search => {
        const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
        
        setSearchTerm(search);
        fetchMovies(endpoint);
    }

    // TODO: Is there where I want to show the user a list of movies where they can also search by category?? Now Playing, Popular, Top Rated???
    // This function will give us a callback to the loadMoreBtn
    const loadMoreMovies = () => {
        const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

        fetchMovies(endpoint);
    }

    //console.log(state); // Before destructoring see line 25
    // Note: Former code in the repo to see the difference within the Grid component
    
    if(error) return <div>Somthing went wrong...</div>
    //if(!state.movies[0]) return <Spinner /> // Before destructoring see line 25
    if(!movies[0]) return <Spinner />

    // BELOW is JSX not HTML technically
    return (
        <>
            {!searchTerm && (
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                    title={heroImage.original_title}
                    text={heroImage.overview}
                />
            )}            
            <SearchBar callback={searchMovies} />
            <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
                {movies.map(movie => (
                    <MovieThumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path
                            ? IMAGE_BASE_URL +  POSTER_SIZE +  movie.poster_path
                            : NoImage
                        }
                        movieId={movie.id}
                        movieName={movie.origional_title}
                    />
                ))}
            </Grid>
            {loading && <Spinner />} 
            {currentPage < totalPages && !loading && (
                <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
            )}
        </>
    );   
};

// NOTE: {loading && <Spinner />} if loading is true then display spinner. created a shortcircut 

export default Home;