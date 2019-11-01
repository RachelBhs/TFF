import React from 'react';
import axios from 'axios';

import '../Common.css';
import './Match.css';

class MatchWait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Loading",
      posterUrl: "Loading",
      director: "Loading"
    }
  }

  componentDidMount = () => {
    this.fetchFilm();
  }

  fetchFilm = () => {
    axios
    .get('https://hackathon-wild-hackoween.herokuapp.com/movies')

    .then((response) => {
      console.log(response);
      this.setState({
        title: response.data.movies[1].title,
        posterUrl: response.data.movies[1].posterUrl,
        director: response.data.movies[1].director,
      })
    })
  }

  render() {
    return (
      <section className="Match" id="container">
        <div className="CloseBtn">
          <img src={"https://image.flaticon.com/icons/svg/1632/1632708.svg"} />
        </div>
        <header>
          <img src={"https://image.flaticon.com/icons/svg/1554/1554591.svg"} />
          <h2>No Match found</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </header>
        <div className="CtnFilm">
          <h3>You can watch this Movie instead</h3>
          <img src={this.state.posterUrl} alt={this.state.posterUrl} />
          <h2>{this.state.title}</h2>
          <p>{this.state.director}</p>
        </div>
      </section>
    );
  }
}
export default MatchWait;
