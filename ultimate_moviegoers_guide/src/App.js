import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';
import apiKey from './apiKey';
import MovieCard from './components/MovieCard'



// Older array
/*const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Star Trek'},
  {id: 3, title: 'Stargate'}
];*/

class App extends Component {
  state = { movies: [] };

  // Async call to the movie database for movie info
  async componentDidMount(){
    //setTimeout(() => this.setState({movies: originalMovies}), 5000);
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1');
    const json = await response.json();
    this.setState({ movies:json.results });
  }

  // Render is a REQUIRED function
  render() {
    const {movies} = this.state;
    //const classes = useStyles();

    return (
        <div className="App">
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    );
  }
}

export default App;


/*Old Code*/

// <MovieCard movie={movies[0]}/>

//Now PLaying:  https://api.themoviedb.org/3/movie/now_playing?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
//Popular:  https://api.themoviedb.org/3/movie/popular?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
