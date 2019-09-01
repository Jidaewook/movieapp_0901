import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { async } from 'q';
import Movie from './Movie';

class App extends Component {
  state={
    isLoading: true,
    movies: []

  };

  getMovies = async () => {
    const{
      data: {
        data: {movies}
      }

    } = await Axios.get(
      "https://yts-proxy.now.sh/list_movies.json"
    );
      this.setState({movies, isLoading: false}); 
  };



  componentDidMount(){
    this.getMovies();
  };


  

  render(){
    const {isLoading, movies} = this.state;

    return(
      <div>
        {isLoading ? 
        // 로딩이 참이면,
        "Loading..." 
        //로딩이 거짓이면, 데이터를 뿌려줌.
        : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
          />

      
        ))}
      </div>
    );
  }
}

export default App;