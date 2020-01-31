import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  // endpoint is the data I'm seeking to retrieve
  const fetchMovies = async endpoint => { 
      setError(false);
      setLoading(true);

      try { 
          const result = await (await fetch(endpoint)).json(); // NOTE: we await to get the data from the endpoint and then await to parse the data fetched into a json object so I can use the fields later
          setState(prev => ({
              ...prev,
              movies: [...result.results],
              heroImage: prev.heroImage || result.results[0],
              currentPage: result.page,
              totalPages: result.total_pages,
          }));

      } catch(error){
          setError(true);
          console.log(error);
      }
      setLoading(false);
  }

  // TODO: Add Top Rated and Now Playing to the list
  useEffect(() => {
      fetchMovies('${API_URL}movie/popular?api_key=${API_KEY}');
  }, [])

  return [{ state, loading, error }, fetchMovies];
}