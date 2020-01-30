// React imports
import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

// My imports
import './App.css';
import apiKey from './apiKey';
import MovieCard from './components/MovieCard'

// Definitions

/*const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Star Trek'},
  {id: 3, title: 'Stargate'}
];*/  // Older array

// Creates an app bar with the title and search bar
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

// Function for the app bar -- now how to add the async call to the movie database
export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Ultimate Movie Guide
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// MAIN
/*class App extends Component {
  state = { movies: [] };

  // Async call to the movie database for movie info
  async componentDidMount(){
    //setTimeout(() => this.setState({movies: originalMovies}), 5000);
    // I'm not sure why I get a 401 page error when I use ${apiKey} in my string https query below
    // TODO: firgure out how to display mutliple categories from the movieDB
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1');
      //'https://api.themoviedb.org/3/movie/top_rated?api_key=78ec6b1435aa01e301624172e5d69b4f&append_to_response=popular&language=en-US&page=1');
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

export default App; // oh this is realated to .css
*/

/*Old Code*/

// <MovieCard movie={movies[0]}/>

//Now PLaying:  https://api.themoviedb.org/3/movie/now_playing?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
//Popular:  https://api.themoviedb.org/3/movie/popular?api_key=78ec6b1435aa01e301624172e5d69b4f&language=en-US&page=1
