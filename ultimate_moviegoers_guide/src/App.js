import React, {Component} from 'react';
import './App.css';

import MovieCard from './components/MovieCard'

const originalMovies = [
  {id: 1, title: 'Star Wars'},
  {id: 2, title: 'Star Trek'},
  {id: 3, title: 'Stargate'}
];


class App extends Component {
  state = {movies: []}

  componentDidMount(){
    setTimeout(() => this.setState({movies: originalMovies}), 5000);
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
