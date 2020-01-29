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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Star Trek'},
  {id: 3, title: 'Stargate'}
];

class App extends Component {
  state = { movies: [] };

  async componentDidMount(){
    //setTimeout(() => this.setState({movies: originalMovies}), 5000);
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1');
    const json = await response.json();
    this.setState({ movies:json.results });
  }



//Now PLaying:  https://api.themoviedb.org/3/movie/now_playing?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
//Popular:  https://api.themoviedb.org/3/movie/popular?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
  render() {
    const {movies} = this.state;
    const classes = useStyles();

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Something Here
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <div className="App">
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    );
  }
}

export default makeStyles(useStyles)(App);


/*Old Code*/

// <MovieCard movie={movies[0]}/>
