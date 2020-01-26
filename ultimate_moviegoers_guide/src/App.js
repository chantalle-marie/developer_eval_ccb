import React, {Component} from 'react';
import './App.css';
//import apiKey from './apiKey';
import MovieCard from './components/MovieCard'

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

  render() {
    const {movies} = this.state;

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
