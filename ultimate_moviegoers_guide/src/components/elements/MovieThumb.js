import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable }) => (
  <StyledMovieThumb>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <img classNames="clickable" src={image} alt="moviethumb" />
      </Link>      
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>

)

MovieThumb.propTypes = {
  image: PropTypes.string, // URL to the image that's why it's a string
  movieId: PropTypes.number,
  clickable: PropTypes.bool
}

export default MovieThumb;
