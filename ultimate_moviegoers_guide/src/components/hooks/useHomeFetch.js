import { useState, useEffect } from 'react';
import { POPULAR_BASE_URL } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  // endpoint is the data I'm seeking to retrieve
  const fetchMovies = async endpoint => { 
      setError(false);
      setLoading(true);

      const isLoadMore = endpoint.search('page');

      try { 
          const result = await (await fetch(endpoint)).json(); // NOTE: we await to get the data from the endpoint and then await to parse the data fetched into a json object so I can use the fields later
          setState(prev => ({
              ...prev,
              movies:
                isLoadMore !== -1
                ? [...prev.movies, ...result.results]
                : [...result.results],
              heroImage: prev.heroImage || result.results[0],
              currentPage: result.page,
              totalPages: result.total_pages,
          }))

      } catch(error){
          setError(true);
          console.log(error);
      }
      setLoading(false);
  }

  useEffect(() => {
      fetchMovies(POPULAR_BASE_URL);
  }, [])

  return [{ state, loading, error }, fetchMovies];
}