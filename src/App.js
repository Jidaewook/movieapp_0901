import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { async } from 'q';


class App extends Component {
  state={
    isLoading: true,
    movies: []

  };

  getMovies = async () => {
    const movies = await Axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount(){
    this.getMovies();
  };


  

  render(){
    const {isLoading} = this.state;

    return(
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;